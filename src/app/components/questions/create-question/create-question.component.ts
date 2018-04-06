import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tag} from "../../../models/tag";
import {TagDataService} from "../../../services/tag/tag-data.service";
import {AuthService} from "../../../services/auth.service";
import {QuestionDataService} from "../../../services/question/question-data.service";
import {Router} from "@angular/router";
import {SnackBarServiceService} from "../../../services/snack-bar-service.service";

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
    userId: string = '';

    constructor(
        private tagDataService: TagDataService,
        private authService: AuthService,
        private questionDataService: QuestionDataService,
        private router: Router,
        private snackBarService: SnackBarServiceService
    ) {
    }
    ngOnInit() {
        let user = this.authService.getUser();
        if(user){
            this.userId = user.id;
        }
        this.getTags();
        this.createForm(this.userId);
    }

    onSubmit(){

        this.loadingSpinner = true;
        let inputs = {
            user_id: this.askQuestionForm.value.userId,
            title: this.askQuestionForm.value.title,
            description: this.askQuestionForm.value.description,
            tags: this.askQuestionForm.value.tags,
            featured: 0,
            sticky: 0,
        };

        this.questionDataService.createQuestion(inputs).subscribe(response => {

            if(response.data.status === 'success'){
                this.snackBarService.openSnackBar('Your question has been created successfully.', '');
                this.router.navigate(['/questions']);
            }else{
                this.invalidData = true;
            }

            this.loadingSpinner = false;
        });

    }

    createForm(userId) {
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
            ]),
            'userId': new FormControl(userId, [
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
