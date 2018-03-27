import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Question} from '../../models/question';
import {QuestionDataService} from '../../services/question/question-data.service';
import {PaginationMetaTransformationService} from "../../services/transformers/pagination-meta-transformation.service";
import {PaginationMeta} from "../../models/paginationMeta";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    questions: Question[];
    meta: PaginationMeta;
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(
        private questionDataService: QuestionDataService,
        private metaTransform: PaginationMetaTransformationService
        ) {
    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions(): void {
        this.questionDataService.getAllQuestions().subscribe(response => {
            this.questions = response.questions;
            this.meta = this.metaTransform.transformInputs(response.meta);
            this.loadingSpinner = false;
            this.isRecords = this.questions.length === 0;
            console.log(this.meta);
        });
    }

}
