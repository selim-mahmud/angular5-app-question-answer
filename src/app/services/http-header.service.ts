import {Inject, Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, AppConfig} from "../app-config.module";

@Injectable()
export class HttpHeaderService {

    headers: HttpHeaders;

    /**
     * @constructor
     */
    constructor(@Inject(APP_CONFIG) private config: AppConfig) {
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
                'Authorization': 'Basic ' + btoa(this.config.apiUsername + ':' + this.config.apiPassword),
            })
        };
    }

}
