import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuestionDataService} from '../../services/question/question-data.service';
import {Question} from '../../models/question';
import * as moment from 'moment';

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
        let now = moment(); // add this 2 of 4
        console.log('hello world', now.format()); // add this 3 of 4
        console.log(now.add(7, 'days').format()); // add this 4of 4
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
