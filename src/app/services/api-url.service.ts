import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class ApiUrlService {

    constructor() {
    }

    getAllResourceUrl(resourceName: string) {
        return this.getBaseUrl() + resourceName;
    }

    getSingleResourceUrl(resourceName: string, resourceId: string) {
        return this.getBaseUrl() + resourceName + '/' + resourceId;
    }

    getCreateResourceUrl(resourceName: string) {
        return this.getBaseUrl() + resourceName;
    }

    getBaseUrl(): string {
        return API_BASE_URL;
    }

}
