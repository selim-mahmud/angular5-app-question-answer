import {Injectable} from '@angular/core';
import {AnswerApiService} from "./answer-api.service";
import {Observable} from "rxjs/Observable";
import {Answer} from "../../models/answer";

@Injectable()
export class AnswerDataService {

    constructor(private answerApiService: AnswerApiService) {
    }

    getAllAnswers() {
        return this.answerApiService.getAllAnswers();
    }

    getAnswerById(id: string): Observable<Answer> {
        return this.answerApiService.getAnswerById(id);
    }

    createAnswer(inputs: Object): Observable<any> {
        return this.answerApiService.createAnswer(inputs);
    }

    updateAnswer(inputs: Object, id: string): Observable<any> {
        return this.answerApiService.updateAnswer(inputs, id);
    }

}
