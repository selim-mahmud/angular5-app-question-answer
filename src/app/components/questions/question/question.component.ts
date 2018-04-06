import {Component, OnInit, OnDestroy} from '@angular/core';
import {QuestionDataService} from "../../../services/question/question-data.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../../models/question";
import {UserDataService} from "../../../services/user/user-data.service";
import {User} from "../../../models/user";
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

    question: Question;
    loadingSpinnerQuestion: boolean = true;
    isAuthenticated: boolean = false;
    questionValueChange;
    answerValueChange;

    constructor(
        private questionDataService: QuestionDataService,
        private route: ActivatedRoute,
        private userDataService: UserDataService,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id: string = params['id'].substr(params['id'].lastIndexOf('-') + 1);
            this.getQuestion(id);
        });

        this.isAuthenticated = this.authService.isAuth();
    }

    getQuestion(id: string): void {
        this.questionValueChange = this.questionDataService.getQuestionById(id).subscribe(response => {

            this.question = response;

            this.userDataService.getUserById(this.question.user.id).subscribe(response => {
                this.question.user = new User(response);
                this.loadingSpinnerQuestion = false;
            });
        });
    }

    OnDestroy() {
        this.questionValueChange.unsubscribe();
        this.answerValueChange.unsubscribe();
    }

}
