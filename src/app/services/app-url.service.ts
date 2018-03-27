import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class AppUrlService {

    params;

    constructor(private route: ActivatedRoute) {
    }

    getParam(paramName: string) {
        this.route
            .queryParams
            .subscribe(params => {
                console.log(params['page']);
            });
    }

}
