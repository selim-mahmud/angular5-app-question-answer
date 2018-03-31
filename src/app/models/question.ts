import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Answer} from "./answer";
import {AnswerTransformerService} from "../services/transformers/answer-transformer.service";

@Injectable()
export class Question {
    id: string;
    userId: number = 0;
    title: string = '';
    slug: string = '';
    description: string = '';
    featured: boolean = false;
    sticky: boolean = false;
    solved: boolean = false;
    upVote: number = 0;
    downVote: number = 0;
    createdAt = {'date': null, 'timezone_type': null, 'timezone': null};
    updatedAt = {'date': null, 'timezone_type': null, 'timezone': null};
    answers = [];
    tags = [];
    user = {'name': null, 'id': null, 'email': null};

    constructor(
        values: Object = {}
    ) {
        Object.assign(this, values);
        this.getAnswers();
    }

    getCreatedAt() {
        return moment(this.createdAt.date, 'YYYY-MM-DD').format('Do MMM, YYYY');
    }

    getAnswers() {
        const answerTransformationService = new AnswerTransformerService();
        this.answers = this.answers.map(
            (answer) => new Answer(answerTransformationService.transformInputs(answer))
        );
    }
}
