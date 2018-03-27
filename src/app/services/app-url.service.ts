import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {APP_CONFIG, AppConfig} from "../app-config.module";

@Injectable()
export class AppUrlService {

    params: Object;

    constructor(private route: ActivatedRoute, @Inject(APP_CONFIG) private config: AppConfig) {
        this.route
            .queryParams
            .subscribe(params => {
                this.params = params;
            });
    }

    getCurrentPageNumber(){
        return this.getParam(this.config.pageParamName);
    }

    getParam(paramName: string) {
        return this.params[paramName] | 0;
    }

}
