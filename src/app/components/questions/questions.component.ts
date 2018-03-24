import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuestionDataService} from '../../services/question/question-data.service';
import {Question} from '../../models/question';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
    questions: Question[];
    links;
    meta;
    loadingSpinner: boolean = true;
    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.questionDataService.getAllQuestions().subscribe( response => {
            console.log(response);
            this.questions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
            this.loadingSpinner = false;
        });
    }

    getQuestions() {
        this.questionDataService.getAllQuestions().subscribe( data => {
            this.questions = data;
        });
    }

}
