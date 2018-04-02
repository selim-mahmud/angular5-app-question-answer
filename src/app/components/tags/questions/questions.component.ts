import {Component, OnInit} from '@angular/core';
import {TagDataService} from "../../../services/tag/tag-data.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../../models/question";
import {PaginationMeta} from "../../../models/paginationMeta";
import {PaginationMetaTransformationService} from "../../../services/transformers/pagination-meta-transformation.service";
import {Tag} from "../../../models/tag";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

    tag: Tag;
    questions: Question[];
    paginationMeta: PaginationMeta;
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(
        private tagDataService: TagDataService,
        private route: ActivatedRoute,
        private metaTransform: PaginationMetaTransformationService
        ) {
    }

    ngOnInit() {

        this.route.params.subscribe( params => {
            this.getQuestions(params['id']);
            this.getTag(params['id']);
        });
    }

    getQuestions(id: string): void {
        this.tagDataService.getQuestionsByTagId(id).subscribe(response => {
            this.questions = response.questions;
            this.paginationMeta = this.metaTransform.transformInputs(response.meta);
            this.loadingSpinner = false;
            this.isRecords = this.questions.length === 0;
        });
    }

    getTag(id: string): void {
        this.tagDataService.getTagById(id).subscribe(response => {
            this.tag = response;
        });
    }

}
