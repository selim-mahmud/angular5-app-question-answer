import {Injectable} from '@angular/core';
import {AnswerApiService} from "./answer-api.service";
import {Observable} from "rxjs/Observable";
import {Answer} from "../../models/answer";

@Injectable()
export class AnswerDataService {

    constructor(private answerApiService: AnswerApiService) {
    }

    getAllQuestions() {
        return this.answerApiService.getAllAnswers();
    }

    getQuestionById(id: string): Observable<Answer> {
        return this.answerApiService.getAnswerById(id);
    }

}
