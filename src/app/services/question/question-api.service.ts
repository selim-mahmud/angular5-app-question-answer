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
import {ActivatedRoute} from "@angular/router";
import {AppUrlService} from "../app-url.service";

const RESOURCE_NAME = 'questions';

@Injectable()
export class QuestionApiService {

    response: any = {
        'data': null,
        'links': null,
        'meta': null
    };

    constructor(
        private httpHeaderService: HttpHeaderService,
        private httpClient: HttpClient,
        private questionTransformationService: QuestionTransformerService,
        private appUrlService: AppUrlService
    ) {

    }

    /**
     * @return {Observable}
     */
    public getAllQuestions() {

        this.appUrlService.getParam('dfds');

        let apiUrlService: ApiUrlService = new ApiUrlService();

        let relations: string[] = ['answers', 'tags'];
        let apiUrl: string =
            apiUrlService.baseResourceUrl(RESOURCE_NAME).allFields().addRelations(relations).getUrl();

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getFeaturedQuestions() {

        let apiUrlService: ApiUrlService = new ApiUrlService();
        let relations: string[] = ['answers', 'tags'];
        let filters = [
            {'c': 'featured', 'o': '=', 'v': '1'}
        ];
        let apiUrl: string =
            apiUrlService.baseResourceUrl(RESOURCE_NAME).allFields().addColumnFilters(filters).addRelations(relations).getUrl();

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getPopularQuestions() {

        let apiUrlService: ApiUrlService = new ApiUrlService();
        let relations: string[] = ['answers', 'tags'];
        let sortings: string[][] = [
            ['up_vote', 'DESC'],
            ['down_vote', 'ASC']
        ];
        let apiUrl: string =
            apiUrlService.baseResourceUrl(RESOURCE_NAME).allFields().addSortings(sortings).addRelations(relations).getUrl();

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getUnansweredQuestions() {

        let apiUrlService: ApiUrlService = new ApiUrlService();
        let relations: string[] = ['answers', 'tags'];
        let relationFilters = [
            {'rn': 'answers', 'ro': '=', 'rv': '0'}
        ];
        let apiUrl: string =
            apiUrlService.baseResourceUrl(RESOURCE_NAME).allFields().addRelationFilters(relationFilters).addRelations(relations).getUrl();

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @param {string} apiUrl
     * @return {Observable}
     */
    getHttpResponse(apiUrl: string) {

        return this.httpClient
            .get(
                apiUrl,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                this.response = response;
                let questions = this.response.data.results;
                questions = questions.map(
                    (question) => new Question(this.questionTransformationService.transformInputs(question))
                );
                return {
                    'questions': questions,
                    'links': this.response.links,
                    'meta': this.response.meta,
                }
            })
            .catch(this.handleError);
    }

    /**
     * @param {Question} question
     * @return {Observable}
     */
    // public createQuestion(question: Question): Observable<Question> {
    //
    //     return this.httpClient
    //         .post(
    //             this.apiUrlService.getCreateResourceUrl(RESOURCE_NAME),
    //             question,
    //             this.httpHeaderService.getHttpOptions()
    //         )
    //         .map(response => {
    //             return new Question(response);
    //         })
    //         .catch(this.handleError);
    // }

    /**
     * @param {string} questionId
     * @return {Observable}
     */
    // public getQuestionById(questionId: string): Observable<Question> {
    //     return this.httpClient
    //         .get(
    //             this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, questionId),
    //             this.httpHeaderService.getHttpOptions()
    //         )
    //         .map(response => {
    //             return new Question(response);
    //         })
    //         .catch(this.handleError);
    // }

    /**
     * @param {Question} question
     * @return {Observable}
     */
    // public updateQuestion(question: Question): Observable<Question> {
    //     return this.httpClient
    //         .put(
    //             this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, question.id),
    //             question,
    //             this.httpHeaderService.getHttpOptions()
    //         )
    //         .map(response => {
    //             return new Question(response);
    //         })
    //         .catch(this.handleError);
    // }

    /**
     * @param {string} questionId
     * @return {Observable}
     */
    // public deleteQuestionById(questionId: string): Observable<null> {
    //     return this.httpClient
    //         .delete(
    //             this.apiUrlService.getSingleResourceUrl(RESOURCE_NAME, questionId),
    //             this.httpHeaderService.getHttpOptions()
    //         )
    //         .map(response => null)
    //         .catch(this.handleError);
    // }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }

}
