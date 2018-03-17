export class Answer {
    id: string;
    userId: number = 0;
    questionId: number = 0;
    description: string = '';
    excepted: boolean = false;
    upVote: number = 0;
    downVote: number = 0;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
