import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class PaginationMeta {

    currentPage: number = 0;
    lastPage: number = 0;
    from: number = 0;
    to: number = 0;
    perPage: number = 0;
    total: number = 0;
    path: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
