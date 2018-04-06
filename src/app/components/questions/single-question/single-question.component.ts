import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../models/question";

@Component({
    selector: 'app-single-question',
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {
    @Input() question: Question;

    constructor() {
    }

    ngOnInit() {
    }

}
