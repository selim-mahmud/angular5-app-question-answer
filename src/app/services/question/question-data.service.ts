import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Question} from '../../models/question';

@Injectable()
export class QuestionDataService {
    headers;
    opts;
    private uRL = 'http://angular-api.dev-selim.com.au/api/v1/questions';

    // automatic incrementing of ids
    lastId: number = 0;

    // Placeholder for questions
    questions: Question[] = [];

    constructor(private http: HttpClient) {}

    getAllQuestions() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Basic ' + btoa('cristina02:password'),
                'Access-Control-Allow-Origin': '*',
            })
        };

        return this.http.get(this.uRL, httpOptions);
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
        let question = this.getQuestionById(id);
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
