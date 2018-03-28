import { Component, OnInit } from '@angular/core';
import {Question} from "../../../models/question";
import {PaginationMeta} from "../../../models/paginationMeta";
import {QuestionDataService} from "../../../services/question/question-data.service";
import {PaginationMetaTransformationService} from "../../../services/transformers/pagination-meta-transformation.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

    questions: Question[];
    paginationMeta: PaginationMeta;
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(
        private questionDataService: QuestionDataService,
        private metaTransform: PaginationMetaTransformationService
    ) {
    }

  ngOnInit() {
      this.getPopularQuestions();
  }

    getPopularQuestions(): void {
        this.questionDataService.getPopularQuestions().subscribe(response => {
            this.questions = response.questions;
            this.paginationMeta = this.metaTransform.transformInputs(response.meta);
            this.loadingSpinner = false;
            this.isRecords = this.questions.length === 0;
        });
    }

}
