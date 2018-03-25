import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatTabChangeEvent} from "@angular/material";
import {Question} from "../../models/question";
import {QuestionDataService} from "../../services/question/question-data.service";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    questions: Question[];
    links;
    meta;
    loadingSpinner: boolean = true;
    displayList: boolean = false;
    isRecords: boolean = false;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.getQuestions(this.questionDataService.getAllQuestions());
    }

    onTabClick(event: MatTabChangeEvent) {

        switch(event.index) {
            case 0:
                this.displayList = false;
                this.loadingSpinner = true;
                this.getQuestions(this.questionDataService.getAllQuestions());
                break;
            case 1:
                this.displayList = false;
                this.loadingSpinner = true;
                this.getQuestions(this.questionDataService.getFeaturedQuestions());
                break;
            case 2:
                this.displayList = false;
                this.loadingSpinner = true;
                this.getQuestions(this.questionDataService.getPopularQuestions());
                break;
            default:
                this.displayList = false;
                this.loadingSpinner = true;
                this.getQuestions(this.questionDataService.getUnansweredQuestions());
        }
    }

    getQuestions(observable){
        observable.subscribe( response => {
            this.questions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
            this.loadingSpinner = false;
            this.displayList = true;
            this.isRecords = this.questions.length === 0;
        });
    }

}
