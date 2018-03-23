import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Question} from '../../models/question';
import {QuestionApiService} from './question-api.service';

@Injectable()
export class QuestionDataService {

    questions: Question[] = [];

    constructor(private questionApiService: QuestionApiService) {
    }

    getAllQuestions(): Observable<Question[]> {
        return this.questionApiService.getAllQuestion();
    }

    getQuestionById(questionId: string): Observable<Question> {
        return this.questionApiService.getQuestionById(questionId);
    }

    addQuestion(question: Question): Observable<Question> {
        return this.questionApiService.createQuestion(question);
    }

    updateQuestion(question: Question): Observable<Question> {
        return this.questionApiService.updateQuestion(question);
    }

    deleteQuestionById(questionId: string): Observable<Question> {
        return this.questionApiService.deleteQuestionById(questionId);
    }


    // toggleTodoComplete(todo: Question) {
    //     let updatedTodo = this.updateTodoById(todo.id, {
    //         complete: !todo.complete
    //     });
    //     return updatedTodo;
    // }
}
