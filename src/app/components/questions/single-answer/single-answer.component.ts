import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Answer} from "../../../models/answer";
import {UserDataService} from "../../../services/user/user-data.service";

@Component({
    selector: 'app-single-answer',
    templateUrl: './single-answer.component.html',
    styleUrls: ['./single-answer.component.scss']
})
export class SingleAnswerComponent implements OnInit, OnDestroy {

    @Input() answer: Answer;

    answerValueChange;

    constructor(private userDataService: UserDataService,) {
    }

    ngOnInit() {

        this.answerValueChange = this.userDataService.getUserById(this.answer.userId).subscribe(response => {
            this.answer.user = response;
        });
    }

    OnDestroy() {
        this.answerValueChange.unsubscribe();
    }

}
