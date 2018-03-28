import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APP_CONFIG, AppConfig} from '../app-config.module';

@Injectable()
export class AppUrlService {

    params: Object;

    constructor(
        private route: ActivatedRoute,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {
        this.route
            .queryParams
            .subscribe(params => {
                this.params = params;
            });
    }

    getFullUrlExceptPaginationParam() {
        const fullUrlWithoutQueryParams = this.getFullUrlWithoutQueryParams();
        const queryParams = this.getParams();
        let queryParamsWithoutPagination = '';

        for (let key in queryParams) {
            if (key !== this.config.pageParamName) {
                if (queryParams.hasOwnProperty(key)) {
                    if (queryParamsWithoutPagination === '') {
                        queryParamsWithoutPagination += '?' + key + '=' + queryParams[key];
                    } else {
                        queryParamsWithoutPagination += '&' + key + '=' + queryParams[key];
                    }
                }
            }
        }

        return fullUrlWithoutQueryParams + queryParamsWithoutPagination;
    }

    getFullUrl() {
        return window.location.href;
    }

    getFullUrlWithoutQueryParams() {
        return window.location.protocol + '//' + window.location.host + window.location.pathname;
    }

    getPathWithoutQueryParams() {
        return window.location.pathname;
    }

    getCurrentPageNumber() {
        return this.getParam(this.config.pageParamName);
    }

    getParam(paramName: string) {
        return this.params[paramName] || 1;
    }

    getParams() {
        return this.params;
    }

}
