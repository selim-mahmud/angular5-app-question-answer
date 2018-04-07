import {Injectable} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionApiService} from './question-api.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class QuestionDataService {

    questions: Question[] = [];

    constructor(private questionApiService: QuestionApiService) {

    }

    getAllQuestions() {
        return this.questionApiService.getAllQuestions();
    }

    getFeaturedQuestions() {
        return this.questionApiService.getFeaturedQuestions();
    }

    getPopularQuestions() {
        return this.questionApiService.getPopularQuestions();
    }

    getUnansweredQuestions() {
        return this.questionApiService.getUnansweredQuestions();
    }

    getQuestionById(id: string): Observable<Question> {
        return this.questionApiService.getQuestionById(id);
    }

    createQuestion(inputs: Object): Observable<any> {
        return this.questionApiService.createQuestion(inputs);
    }


    updateQuestion(inputs: Object, id: string): Observable<any> {
        return this.questionApiService.updateQuestion(inputs, id);
    }
}
