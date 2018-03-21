import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

    tags = new FormControl();
    tagList = ['PHP', 'Laravel', 'Javascript', 'Angular', 'Html', 'CSS'];

    constructor() {
    }

    ngOnInit() {
    }

}
