import {Component, OnInit} from '@angular/core';
import {QuestionDataService} from "../../../../services/question/question-data.service";
import {Question} from "../../../../models/question";

@Component({
    selector: 'app-popular-questions',
    templateUrl: './popular-questions.component.html',
    styleUrls: ['./popular-questions.component.scss']
})
export class PopularQuestionsComponent implements OnInit {

    popularQuestions: Question[];
    links;
    meta;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.questionDataService.getPopularQuestions().subscribe(response => {
            this.popularQuestions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
        });
    }

}
