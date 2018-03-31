import {Injectable} from '@angular/core';
import {HttpHeaderService} from "../http-header.service";
import {HttpClient} from "@angular/common/http";
import {UserTransformerService} from "../transformers/user-transformer.service";
import {ApiUrlService} from "../api-url.service";
import {User} from "../../models/user";
import {Observable} from "rxjs/Observable";

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
                private apiUrlService: ApiUrlService) {

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

        let relations: string[] = ['answers', 'question'];
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
