import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Answer} from "../../../models/answer";
import {UserDataService} from "../../../services/user/user-data.service";
import {AnswerDataService} from "../../../services/answer/answer-data.service";
import {SnackBarServiceService} from "../../../services/snack-bar-service.service";

@Component({
    selector: 'app-single-answer',
    templateUrl: './single-answer.component.html',
    styleUrls: ['./single-answer.component.scss']
})
export class SingleAnswerComponent implements OnInit, OnDestroy {

    @Input() answer: Answer;
    @Input() isAuthenticated: boolean;

    answerValueChange;

    constructor(
            private userDataService: UserDataService,
            private answerDataService: AnswerDataService,
            private snackBarService: SnackBarServiceService
        ) {
    }

    ngOnInit() {
        this.answerValueChange = this.userDataService.getUserById(this.answer.userId).subscribe(response => {
            this.answer.user = response;
        });
    }

    onUpVote(event){
        event.preventDefault();

        let inputs = {up_vote: this.answer.upVote + 1};
        this.answerDataService.updateAnswer(inputs, this.answer.id).subscribe(response => {

            if(response.data.status === 'success'){
                this.answer.upVote++;
                this.snackBarService.openSnackBar('Your up vote has been cast.', '');
            }
        });

    }

    onDownVote(event){
        event.preventDefault();

        let inputs = {down_vote: this.answer.downVote + 1};
        this.answerDataService.updateAnswer(inputs, this.answer.id).subscribe(response => {

            if(response.data.status === 'success'){
                this.answer.downVote++;
                this.snackBarService.openSnackBar('Your down vote has been cast.', '');
            }
        });
    }

    ngOnDestroy() {
        this.answerValueChange.unsubscribe();
    }

}
