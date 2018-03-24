import {Component, OnInit} from '@angular/core';
import {Question} from "../../../../models/question";
import {QuestionDataService} from "../../../../services/question/question-data.service";

@Component({
    selector: 'app-unanswered-questions',
    templateUrl: './unanswered-questions.component.html',
    styleUrls: ['./unanswered-questions.component.scss']
})
export class UnansweredQuestionsComponent implements OnInit {

    unansweredQuestions: Question[];
    links;
    meta;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.questionDataService.getAllQuestions().subscribe(response => {
            this.unansweredQuestions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
        });
    }

}
