import {Injectable} from '@angular/core';
import {HttpHeaderService} from '../http-header.service';
import {ApiUrlService} from '../api-url.service';
import {Question} from '../../models/question';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {QuestionTransformerService} from "../transformers/question-transformer.service";

const RESOURCE_NAME = 'questions';

@Injectable()
export class QuestionApiService {

    constructor(
        private httpHeaderService: HttpHeaderService,
        private apiUrlService: ApiUrlService,
        private httpClient: HttpClient,
        private questionTransformationService: QuestionTransformerService
    )
    {
        //
    }

    /**
     * @return {Observable}
     */
    public getAllQuestions(){

        let relations: string[] = ['answers', 'tags'];
        let apiUrl:string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME).allFields().addRelations(relations).getUrl();

        return this.httpClient
            .get(
                apiUrl,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                let questions = response.data.results;
                questions = questions.map(
                    (question) => new Question(this.questionTransformationService.transformInputs(question))
                );
                return {
                    'questions' : questions,
                    'links' : response.links,
                    'meta' : response.meta,
                }
            })
            .catch(this.handleError);
    }

    /**
     * @param {Question} question
     * @return {Observable}
     */
    public createQuestion(question: Question): Observable<Question> {
        return this.httpClient
            .post(
                this.apiUrlService.getCreateResourceUrl(RESOURCE_NAME),
                question,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return new Question(response);
            })
            .catch(this.handleError);
    }

    /**
     * @param {string} questionId
     * @return {Observable}
     */
    public getQuestionById(questionId: string): Observable<Question> {
        return this.httpClient
            .get(
                this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, questionId),
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return new Question(response);
            })
            .catch(this.handleError);
    }

    /**
     * @param {Question} question
     * @return {Observable}
     */
    public updateQuestion(question: Question): Observable<Question> {
        return this.httpClient
            .put(
                this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, question.id),
                question,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return new Question(response);
            })
            .catch(this.handleError);
    }

    /**
     * @param {string} questionId
     * @return {Observable}
     */
    public deleteQuestionById(questionId: string): Observable<null> {
        return this.httpClient
            .delete(
                this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, questionId),
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => null)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }

}
