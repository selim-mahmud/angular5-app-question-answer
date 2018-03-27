import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Question} from '../../models/question';
import {QuestionDataService} from '../../services/question/question-data.service';

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
    isRecords: boolean = false;

    loading = false;
    total = 0;
    page = 1;
    limit = 20;

    constructor(private questionDataService: QuestionDataService) {
    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions(): void {
        this.loading = true;
        this.questionDataService.getAllQuestions().subscribe(response => {
            this.questions = response.questions;
            this.links = response.links;
            this.meta = response.meta;
            this.loadingSpinner = false;
            this.isRecords = this.questions.length === 0;
            this.loading = false;
            this.total = response.meta.total;
        });
    }

    goToPage(n: number): void {
        this.page = n;
        this.getQuestions();
    }

    onNext(): void {
        this.page++;
        this.getQuestions();
    }

    onPrev(): void {
        this.page--;
        this.getQuestions();
    }

}
