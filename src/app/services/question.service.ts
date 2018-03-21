import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, RequestOptions} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Question} from '../models/question';



@Injectable()
export class QuestionService {
    headers;
    options;
    private uRL = 'http://angular-api.dev-selim.com.au/api/v1/questions';

    // automatic incrementing of ids
    lastId: number = 0;

    // Placeholder for questions
    questions: Question[] = [];

    constructor(private http: HttpClient) {
        this.headers = new Headers();
        this.headers.append('content-type', 'application/json');
        this.headers.append('Authentication', 'Basic nernser:password');
        this.options = new RequestOptions({headers: headers});
    }

    getAllQuestions() {
        return this.http.get(this.uRL, this.options);
    }

    getQuestionById(id: string): Question {
        return this.questions
            .filter(question => question.id === id)
            .pop();
    }

    addQuestion(question: Question): QuestionService {

        this.questions.push(question);
        return this;
    }

    updateQuestionById(id: string, values: Object = {}): Question {
        let question = this.getTodoById(id);
        if (!question) {
            return null;
        }
        Object.assign(question, values);
        return question;
    }

    toggleQuestionFeatured(question: Question) {

        let updatedQuestion = this.updateQuestionById(question.id, {
            featured: !question.featured
        });
        return updatedQuestion;
    }

    deleteQuestionById(id: string): QuestionService {
        this.questions = this.questions
            .filter(question => question.id !== id);
        return this;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
