import {Component, OnInit, OnDestroy} from '@angular/core';
import {QuestionDataService} from "../../../services/question/question-data.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../../models/question";
import {AuthService} from "../../../services/auth.service";
import {SnackBarServiceService} from "../../../services/snack-bar-service.service";

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

    constructor(
        private questionDataService: QuestionDataService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private snackBarService: SnackBarServiceService
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
            this.loadingSpinnerQuestion = false;
        });
    }

    onUpVote(event){
        event.preventDefault();

        let inputs = {up_vote: this.question.upVote + 1};
        this.questionDataService.updateQuestion(inputs, this.question.id).subscribe(response => {

            if(response.data.status === 'success'){
                this.question.upVote++;
                this.snackBarService.openSnackBar('Your up vote has been cast.', '');
            }
        });

    }

    onDownVote(event){
        event.preventDefault();

        let inputs = {down_vote: this.question.downVote + 1};
        this.questionDataService.updateQuestion(inputs, this.question.id).subscribe(response => {

            if(response.data.status === 'success'){
                this.question.downVote++;
                this.snackBarService.openSnackBar('Your down vote has been cast.', '');
            }
        });
    }

    ngOnDestroy() {
        this.questionValueChange.unsubscribe();
    }

}
