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

    // addQuestion(question: Question): Observable<Question> {
    //     return this.questionApiService.createQuestion(question);
    // }
    //
    // updateQuestion(question: Question): Observable<Question> {
    //     return this.questionApiService.updateQuestion(question);
    // }
    //
    // deleteQuestionById(questionId: string): Observable<Question> {
    //     return this.questionApiService.deleteQuestionById(questionId);
    // }


    // toggleTodoComplete(todo: Question) {
    //     let updatedTodo = this.updateTodoById(todo.id, {
    //         complete: !todo.complete
    //     });
    //     return updatedTodo;
    // }
}
