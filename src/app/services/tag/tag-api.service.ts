import {Injectable} from '@angular/core';
import {HttpHeaderService} from "../http-header.service";
import {HttpClient} from "@angular/common/http";
import {ApiUrlService} from "../api-url.service";
import {TagTransformerService} from "../transformers/tag-transformer.service";
import {Tag} from "../../models/tag";
import {Observable} from "rxjs/Observable";
import {Question} from "../../models/question";
import {QuestionTransformerService} from "../transformers/question-transformer.service";

const RESOURCE_NAME = 'tags';
const PAGINATION_LIMIT = 10;

@Injectable()
export class TagApiService {

    response: any = {
        'data': null,
        'links': null,
        'meta': null
    };

    constructor(private httpHeaderService: HttpHeaderService,
                private httpClient: HttpClient,
                private tagTransformationService: TagTransformerService,
                private apiUrlService: ApiUrlService,
                private questionTransformationService: QuestionTransformerService,
                ) {

    }

    /**
     * @return {Observable}
     */
    public getAllTags() {

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.allFields(apiUrl);

        return this.getHttpResponse(apiUrl)
    }

    /**
     * @param {string} id
     * @return {Observable}
     */
    public getQuestionsByTagId(id: string): Observable<any> {

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
    public getTagById(id: string): Observable<Tag> {

        let apiUrl: string = this.apiUrlService.baseResourceUrl(RESOURCE_NAME);
        apiUrl = this.apiUrlService.singleResourceUrl(apiUrl, id);
        apiUrl = this.apiUrlService.allFields(apiUrl);

        return this.httpClient
            .get(
                apiUrl,
                this.httpHeaderService.getHttpOptions()
            )
            .map(response => {
                this.response = response;
                return new Tag(this.tagTransformationService.transformInputs(this.response.data));
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
                let tags = this.response.data.results;
                tags = tags.map(
                    (tag) => new Tag(this.tagTransformationService.transformInputs(tag))
                );
                return {
                    'tags': tags,
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }

}
