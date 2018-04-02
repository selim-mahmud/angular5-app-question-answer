import moment = require("moment");

export class Tag {

    id: string;
    name: string = '';
    slug: string = '';
    active: boolean = false;
    createdAt = {'date': null, 'timezone_type': null, 'timezone': null};
    updatedAt = {'date': null, 'timezone_type': null, 'timezone': null};

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    getCreatedAt() {
        return moment(this.createdAt.date, 'YYYY-MM-DD').format('Do MMM, YYYY');
    }
}
