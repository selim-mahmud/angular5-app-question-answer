import {Component, OnInit} from '@angular/core';
import {QuestionDataService} from "../../../../services/question/question-data.service";
import {Question} from "../../../../models/question";

@Component({
    selector: 'app-featured-questions',
    templateUrl: './featured-questions.component.html',
    styleUrls: ['./featured-questions.component.scss']
})
export class FeaturedQuestionsComponent implements OnInit {

    featuredQuestions: Question[];
    links;
    meta;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.questionDataService.getAllQuestions().subscribe(response => {
            this.featuredQuestions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
        });
    }

}
