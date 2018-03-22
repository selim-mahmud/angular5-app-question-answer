import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {HttpHeaders} from '@angular/common/http';

const API_USERNAME = environment.apiUsername;
const API_PASSWORD = environment.apiPassword;

@Injectable()
export class HttpHeaderService {

    headers: HttpHeaders;

    constructor() {
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Basic ' + btoa(API_USERNAME + ':' + API_PASSWORD));
    }

    setHeader(name: string, value: string | string[]) {
        this.headers.append(name, value);
    }

    getHttpOptions() {
        return httpOptions = {
            headers: this.headers
        };
    }

}
