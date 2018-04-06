import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {AnswerDataService} from "../../../../services/answer/answer-data.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {Answer} from "../../../../models/answer";
import {SnackBarServiceService} from "../../../../services/snack-bar-service.service";

@Component({
    selector: 'app-create-answer',
    templateUrl: './create-answer.component.html',
    styleUrls: ['./create-answer.component.scss']
})
export class CreateAnswerComponent implements OnInit {

    @Input() questionId: string;

    answers = new Subject<Answer[]>();

    answerForm: FormGroup;
    loadingSpinner = false;
    invalidData = false;
    userId: string = '';

    constructor(
        private authService: AuthService,
        private answerDataService: AnswerDataService,
        private router: Router,
        private snackBarService: SnackBarServiceService
    ) {
    }

    ngOnInit() {
        let user = this.authService.getUser();
        if(user){
            this.userId = user.id;
        }
        this.createForm(this.userId, this.questionId);
    }

    onSubmit(){
        this.loadingSpinner = true;
        let inputs = {
            user_id: this.answerForm.value.userId,
            question_id: this.answerForm.value.questionId,
            description: this.answerForm.value.description
        };

        this.answerDataService.createAnswer(inputs).subscribe(response => {

            console.log(response);

            if(response.data.status === 'success'){
                //this.answers.next(true);
                this.answerForm.reset();
                this.snackBarService.openSnackBar('Your answer has been created successfully.', '');
                this.router.navigate(['/questions/' + this.questionId]);
            }else{
                this.invalidData = true;
            }

            this.loadingSpinner = false;
        });
    }

    createForm(userId: string, questionId: string) {
        this.answerForm = new FormGroup({
            'description': new FormControl('', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(65535)
            ]),
            'userId': new FormControl(userId, []),
            'questionId': new FormControl(questionId, [])
        });
    }

}
