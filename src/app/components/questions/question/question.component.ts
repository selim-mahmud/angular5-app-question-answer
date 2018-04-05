import {Component, OnInit} from '@angular/core';
import {QuestionDataService} from "../../../services/question/question-data.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../../models/question";
import {UserDataService} from "../../../services/user/user-data.service";
import {User} from "../../../models/user";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    question: Question;
    loadingSpinnerQuestion: boolean = true;
    loadingSpinnerAnswer: boolean = false;
    isAuthenticated: boolean = false;

    constructor(
        private questionDataService: QuestionDataService,
        private route: ActivatedRoute,
        private userDataService: UserDataService,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe( params => {
            const id: string = params['id'].substr(params['id'].lastIndexOf('-')+1);
            this.getQuestion(id);
        });

        this.isAuthenticated = this.authService.isAuth();
    }

    getQuestion(id: string): void {
        this.questionDataService.getQuestionById(id).subscribe(response => {

            this.question = response;

            this.userDataService.getUserById(this.question.user.id).subscribe(response => {
                this.question.user = new User(response);
                this.loadingSpinnerQuestion = false;

                if(this.question.answers.length > 0){
                    this.loadingSpinnerAnswer = true;
                }
            });

            for(let i = 0; i < this.question.answers.length; i++){
                this.userDataService.getUserById(this.question.answers[i].userId).subscribe(response => {
                    this.question.answers[i].user = response;
                    if(i === (this.question.answers.length - 1)){
                        this.loadingSpinnerAnswer = false;
                    }
                });
            }
        });
    }

}
