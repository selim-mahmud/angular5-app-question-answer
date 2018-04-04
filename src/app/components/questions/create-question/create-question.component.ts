import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tag} from "../../../models/tag";
import {TagDataService} from "../../../services/tag/tag-data.service";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html',
    styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

    askQuestionForm: FormGroup;
    tagsList: Tag[];
    loadingSpinner = true;
    invalidData = false;

    constructor(
        private tagDataService: TagDataService,
        private authService: AuthService
    ) {
    }
    ngOnInit() {
        this.getTags();
        this.createForm();
    }

    onSubmit(){
        console.log(this.askQuestionForm.value);
        //let question: Object = {email : this.loginForm.value.email, password: this.loginForm.value.password};
    }

    createForm() {
        this.askQuestionForm = new FormGroup({
            'title': new FormControl('', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(255)
            ]),
            'description': new FormControl('', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(65535)
            ]),
            'tags': new FormControl('', [
                Validators.required,
            ])
        });
    }

    getTags(): void {
        this.tagDataService.getAllTags().subscribe(response => {
            this.tagsList = response.tags;
            this.loadingSpinner = false;
        });
    }


}
