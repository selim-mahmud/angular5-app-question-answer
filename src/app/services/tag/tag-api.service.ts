import {Injectable} from '@angular/core';
import {HttpHeaderService} from "../http-header.service";
import {HttpClient} from "@angular/common/http";
import {ApiUrlService} from "../api-url.service";
import {TagTransformerService} from "../transformers/tag-transformer.service";
import {Tag} from "../../models/tag";
import {Observable} from "rxjs/Observable";

const RESOURCE_NAME = 'tags';
const PAGINATION_LIMIT = 10;

@Injectable()
export class TagApiService {

    response: any = {
        'data': null
    };

    constructor(private httpHeaderService: HttpHeaderService,
                private httpClient: HttpClient,
                private tagTransformationService: TagTransformerService,
                private apiUrlService: ApiUrlService) {

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
