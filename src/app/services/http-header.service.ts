import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

const API_USERNAME = environment.apiUsername;
const API_PASSWORD = environment.apiPassword;

@Injectable()
export class HttpHeaderService {

    headers: HttpHeaders;

    /**
     * @constructor
     */
    constructor() {
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Basic ' + btoa(API_USERNAME + ':' + API_PASSWORD));
    }

    /**
     * append header
     * @param {string} name
     * @param {string|string[]} value
     */
    setHeader(name: string, value: string | string[]) {
        this.headers.append(name, value);
    }

    /**
     * get header option
     */
    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(API_USERNAME + ':' + API_PASSWORD)
            })
        };
    }

}
