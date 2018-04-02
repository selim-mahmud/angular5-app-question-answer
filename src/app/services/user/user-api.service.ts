import {Injectable} from '@angular/core';
import {HttpHeaderService} from "../http-header.service";
import {HttpClient} from "@angular/common/http";
import {UserTransformerService} from "../transformers/user-transformer.service";
import {ApiUrlService} from "../api-url.service";
import {User} from "../../models/user";
import {Observable} from "rxjs/Observable";
import {Question} from "../../models/question";
import {QuestionTransformerService} from "../transformers/question-transformer.service";

const RESOURCE_NAME = 'users';
const PAGINATION_LIMIT = 10;

@Injectable()
export class UserApiService {

    response: any = {
        'data': null,
        'links': null,
        'meta': null
    };

    constructor(private httpHeaderService: HttpHeaderService,
                private httpClient: HttpClient,
                private userTransformationService: UserTransformerService,
                private questionTransformationService: QuestionTransformerService,
                private apiUrlService: ApiUrlService
    ) {

    }

    /**
     * @return {Observable}
     */
    public getAllUsers() {

        let relations: string[] = ['answers', 'questions'];
        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @param {string} id
     * @return {Observable}
     */
    public getUserById(id: string): Observable<User> {

        let relations: string[] = ['answers', 'questions'];
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
                return new User(this.userTransformationService.transformInputs(this.response.data));
            })
            .catch(this.handleError);
    }

    /**
     * @param {string} id
     * @return {Observable}
     */
    public getQuestionsByUserId(id: string): Observable<any> {

        let relations: string[] = ['answers', 'tags'];
        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.singleResourceUrl(apiUrl, id);
        apiUrl = this.apiUrlService.relatedResourceUrl(apiUrl, 'questions');
        apiUrl = this.apiUrlService.allFields(apiUrl);
        apiUrl = this.apiUrlService.addRelations(apiUrl, relations);
        apiUrl = this.apiUrlService.addPageNumber(apiUrl);
        apiUrl = this.apiUrlService.addPaginationLimit(apiUrl, PAGINATION_LIMIT);

        return this.httpClient
            .get(
                apiUrl,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                this.response = response;
                console.log(this.response);
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
     * @param {object} loginDetails
     * @return {Observable}
     */
    public getLoginResponse(loginDetails: object): Observable<any> {

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);

        return this.httpClient
            .post(
                apiUrl + '/login',
                loginDetails,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                return response;
            })
            .catch(this.handleError);
    }

    /**
     * @param {object} inputs
     * @return {Observable}
     */
    public getRegisterResponse(inputs: object): Observable<any> {

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        return this.httpClient
            .post(
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
                let users = this.response.data.results;
                users = users.map(
                    (user) => new User(this.userTransformationService.transformInputs(user))
                );
                return {
                    'users': users,
                    'links': this.response.links,
                    'meta': this.response.meta,
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }

}
