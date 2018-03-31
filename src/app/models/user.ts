import moment = require("moment");

export class User {

    id: string;
    name: string = '';
    email: string = '';
    active: boolean = false;
    activationToken: string = '';
    rememberToken: string = '';
    roles: string[] = [];
    questions = [];
    answers = [];
    createdAt = {'date': null, 'timezone_type': null, 'timezone': null};
    updatedAt = {'date': null, 'timezone_type': null, 'timezone': null};

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    getCreatedAt() {
        return moment(this.createdAt.date, 'YYYY-MM-DD').format('Do MMM, YYYY');
    }
}
