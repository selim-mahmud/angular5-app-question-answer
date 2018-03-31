import {Injectable} from '@angular/core';
import {HttpHeaderService} from "../http-header.service";
import {HttpClient} from "@angular/common/http";
import {QuestionTransformerService} from "../transformers/question-transformer.service";
import {ApiUrlService} from "../api-url.service";
import {Answer} from "../../models/answer";
import {Observable} from "rxjs/Observable";

const RESOURCE_NAME = 'answers';
const PAGINATION_LIMIT = 10;

@Injectable()
export class AnswerApiService {

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
    public getAllAnswers() {

        let relations: string[] = ['user', 'question'];
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
    public getAnswerById(id: string): Observable<Answer> {

        let relations: string[] = ['user', 'question'];
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
                return new Answer(this.questionTransformationService.transformInputs(this.response.data));
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
                let answers = this.response.data.results;
                answers = answers.map(
                    (answer) => new Answer(this.questionTransformationService.transformInputs(answer))
                );
                return {
                    'answers': answers,
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
