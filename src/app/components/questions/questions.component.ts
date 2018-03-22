import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuestionService} from '../../services/question/question-data.service';
import {Question} from '../../models/question';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
    questions;
    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    constructor(private questionService: QuestionService) {
    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() {
        this.questionService.getAllQuestions().subscribe(
            data => {
                this.questions = data
            },
            err => console.error(err),
            () => console.log('done loading foods')
        );
    }

}
