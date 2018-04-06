import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../../models/answer";

@Component({
    selector: 'app-single-answer',
    templateUrl: './single-answer.component.html',
    styleUrls: ['./single-answer.component.scss']
})
export class SingleAnswerComponent implements OnInit {

    @Input() answer: Answer;

    constructor() {
    }

    ngOnInit() {
    }

}
