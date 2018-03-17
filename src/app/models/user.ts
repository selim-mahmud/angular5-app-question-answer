export class User {

    id: string;
    name: string = '';
    email: string = '';
    password: string = '';
    active: boolean = false;
    activationToken: string = '';
    rememberToken: string = '';
    roles: string[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
