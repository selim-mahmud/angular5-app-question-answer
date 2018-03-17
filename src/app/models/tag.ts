export class Tag {

    id: string;
    name: string = '';
    slug: string = '';
    active: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
