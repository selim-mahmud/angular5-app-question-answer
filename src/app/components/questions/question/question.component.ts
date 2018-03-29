import {Component, OnInit} from '@angular/core';
import {QuestionDataService} from "../../../services/question/question-data.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../../models/question";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    question: Question;
    loadingSpinner: boolean = true;

    ngOnInit() {
            this.route.params.subscribe( params => {
                const id: string = params['id'].substr(params['id'].lastIndexOf('-')+1);
                console.log(id);
                this.getQuestion(id);
            }
        );
    }

    constructor(private questionDataService: QuestionDataService, private route: ActivatedRoute) {
    }

    getQuestion(id: string): void {
        this.questionDataService.getQuestionById(id).subscribe(response => {
            this.question = response;
            this.loadingSpinner = false;

            console.log(this.question);
        });
    }

}
