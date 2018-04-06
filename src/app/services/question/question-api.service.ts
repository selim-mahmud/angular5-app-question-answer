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
const PAGINATION_LIMIT = 10;

@Injectable()
export class QuestionApiService {

    response: any = {
        'data': null,
        'links': null,
        'meta': null
    };

    constructor(private httpHeaderService: HttpHeaderService,
                private httpClient: HttpClient,
                private questionTransformationService: QuestionTransformerService,
                private apiUrlService: ApiUrlService) {

    }

    /**
     * @return {Observable}
     */
    public getAllQuestions() {

        let relations: string[] = ['answers', 'tags'];
        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getFeaturedQuestions() {

        let relations: string[] = ['answers', 'tags'];
        let filters = [
            {'c': 'featured', 'o': '=', 'v': '1'}
        ];

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addColumnFilters(apiUrl, filters);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getPopularQuestions() {

        let relations: string[] = ['answers', 'tags'];
        let sortings: string[][] = [
            ['up_vote', 'DESC'],
            ['down_vote', 'ASC']
        ];

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addSortings(apiUrl, sortings);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @return {Observable}
     */
    public getUnansweredQuestions() {

        let relations: string[] = ['answers', 'tags'];
        let relationFilters = [
            {'rn': 'answers', 'ro': '=', 'rv': '0'}
        ];

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addRelationFilters(apiUrl, relationFilters);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

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
     * @param {string} id
     * @return {Observable}
     */
    public getQuestionById(id: string): Observable<Question> {

        let relations: string[] = ['answers', 'tags', 'user'];
        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.singleResourceUrl(apiUrl, id);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);

        return this.httpClient
            .get(
                apiUrl,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                this.response = response;
                return new Question(this.questionTransformationService.transformInputs(this.response.data));
            })
            .catch(this.handleError);
    }

    /**
     * @param {Object} inputs
     * @return {Observable}
     */
    public createQuestion(inputs: Object): Observable<any> {

        return this.httpClient
            .post(
                this.apiUrlService.baseResourceUrl(RESOURCE_NAME),
                inputs,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return response;
            })
            .catch(this.handleError);
    }



    /**
     * @param {Object} inputs
     * @param {string} id
     * @return {Observable}
     */
    public updateQuestion(inputs: Object, id: string): Observable<any> {

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.singleResourceUrl(apiUrl, id);

        return this.httpClient
            .put(
                apiUrl,
                inputs,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return response;
            })
            .catch(this.handleError);
    }

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
