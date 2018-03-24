import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class ApiUrlService {

    resourceUrl: string = API_BASE_URL;

    /**
     * @constructor
     */
    constructor() {
    }

    /**
     * @param {string} resourceName
     * @return {this}
     */
    baseResourceUrl(resourceName: string): this {
        this.resourceUrl = this.resourceUrl + resourceName;
        return this;
    }

    /**
     * @return {this}
     */
    allFields(): this {
        let param = '?fields=all';
        if(this.resourceUrl.includes('?')){
            param = '&fields=all';
        }
        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * @return {this}
     */
    addRelations(relations: string[]): this {

        let param = '?';
        if(this.resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < relations.length; i++) {
            param += '&add_relations[' + i + ']='+relations[i];
        }

        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * get api base url
     * @return {string}
     */
    getUrl(): string {
        return this.resourceUrl;
    }

}
