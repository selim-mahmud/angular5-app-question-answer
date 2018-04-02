import {Component, OnInit} from '@angular/core';
import {Question} from "../../../models/question";
import {PaginationMeta} from "../../../models/paginationMeta";
import {ActivatedRoute} from "@angular/router";
import {UserDataService} from "../../../services/user/user-data.service";
import {PaginationMetaTransformationService} from "../../../services/transformers/pagination-meta-transformation.service";
import {User} from "../../../models/user";

@Component({
    selector: 'app-questions',
    templateUrl: './user-questions.component.html',
    styleUrls: ['./user-questions.component.scss']
})
export class UserQuestionsComponent implements OnInit {

    user: User;
    questions: Question[];
    paginationMeta: PaginationMeta;
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(private userDataService: UserDataService,
                private route: ActivatedRoute,
                private metaTransform: PaginationMetaTransformationService) {
    }

    ngOnInit() {
        this.route.params.subscribe( params => {
            this.getQuestions(params['id']);
            this.getUser(params['id']);
        });
    }

    getQuestions(id: string): void {
        this.userDataService.getQuestionsByUserId(id).subscribe(response => {
            this.questions = response.questions;
            this.paginationMeta = this.metaTransform.transformInputs(response.meta);
            this.loadingSpinner = false;
            this.isRecords = this.questions.length === 0;

            console.log(this.questions);
        });
    }

    getUser(id: string): void {
        this.userDataService.getUserById(id).subscribe(response => {
            this.user = response;
        });
    }

}
