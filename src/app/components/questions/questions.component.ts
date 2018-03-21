import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../models/question';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
    question;
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
                this.question = data;
            },
            err => console.error(err),
            () => console.log('done loading foods')
        );
    }

}
