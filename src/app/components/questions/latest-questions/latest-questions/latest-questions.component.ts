import {Component, OnInit} from '@angular/core';
import {Question} from "../../../../models/question";
import {QuestionDataService} from "../../../../services/question/question-data.service";

@Component({
    selector: 'app-latest-questions',
    templateUrl: './latest-questions.component.html',
    styleUrls: ['./latest-questions.component.scss']
})
export class LatestQuestionsComponent implements OnInit {

    latestQuestions: Question[];
    links;
    meta;
    loadingSpinner: boolean = true;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.questionDataService.getAllQuestions().subscribe( response => {
            console.log(response);
            this.latestQuestions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
            this.loadingSpinner = false;
        });
    }

}
