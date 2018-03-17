import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html',
    styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

    questionForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.validateForm();
    }

    onSubmit(){
        console.log(this.questionForm);
    }

    validateForm(){
        this.questionForm = new FormGroup({
            'title': new FormControl(null, [
                Validators.required,
                Validators.maxLength(255),
                Validators.minLength(10),
            ]),
            'description': new FormControl(null, [
                Validators.required,
                Validators.maxLength(65000),
                Validators.minLength(20),
            ])
        });
    }


}
