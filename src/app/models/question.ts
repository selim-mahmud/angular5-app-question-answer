import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class Question {
    id: string;
    userId: number = 0;
    title: string = '';
    slug: string = '';
    description: string = '';
    featured: boolean = false;
    sticky: boolean = false;
    solved: boolean = false;
    upVote: number = 0;
    downVote: number = 0;
    createdAt = {};
    updatedAt = {};
    answers = [];
    tags = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    getCreatedAt(){
        return moment(this.createdAt.date, 'YYYY-MM-DD').format('Do MMM, YYYY');
    }
}
