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
    allResourceUrl(resourceName: string): this {
        this.resourceUrl = this.resourceUrl + resourceName;
        return this;
    }

    /**
     * @param {string} resourceName
     * @param {string} resourceId
     * @return {string}
     */
    getSingleResourceUrl(resourceName: string, resourceId: string): string {
        return this.getBaseUrl() + resourceName + '/' + resourceId;
    }

    /**
     * @param {string} resourceName
     * @return {string}
     */
    getCreateResourceUrl(resourceName: string): string {
        return this.getBaseUrl() + resourceName;
    }

    /**
     * @param {string} resourceName
     * @return {this}
     */
    allFields(): this {
        this.resourceUrl = this.resourceUrl + '?fields=all';
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
