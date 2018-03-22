import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class ApiUrlService {

    /**
     * @constructor
     */
    constructor() {
    }

    /**
     * @param {string} resourceName
     * @return {string}
     */
    getAllResourceUrl(resourceName: string): string {
        return this.getBaseUrl() + resourceName;
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
     * get api base url
     * @return {string}
     */
    getBaseUrl(): string {
        return API_BASE_URL;
    }

}
