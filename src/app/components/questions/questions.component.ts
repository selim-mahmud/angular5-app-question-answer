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
    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        console.log(this.getQuestions());
    }

    getQuestions() {
        return this.questionDataService.getAllQuestions();
    }

}
