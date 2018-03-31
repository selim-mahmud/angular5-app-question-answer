import moment = require("moment");

export class Answer {
    id: string;
    userId: number = 0;
    questionId: number = 0;
    description: string = '';
    excepted: boolean = false;
    upVote: number = 0;
    downVote: number = 0;
    createdAt = {'date': null, 'timezone_type': null, 'timezone': null};
    updatedAt = {'date': null, 'timezone_type': null, 'timezone': null};

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    getCreatedAt() {
        return moment(this.createdAt.date, 'YYYY-MM-DD').format('Do MMM, YYYY');
    }
}
