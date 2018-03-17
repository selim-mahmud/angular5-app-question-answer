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

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
