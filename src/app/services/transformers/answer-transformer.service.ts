import {Injectable} from '@angular/core';

@Injectable()
export class AnswerTransformerService {

    constructor() {
    }

    transformInputs(inputs) {
        let mapObj = this.getTransformationMap();
        let transformInputs = {};

        for (let key in inputs) {
            if (mapObj.hasOwnProperty(key)) {

                transformInputs[mapObj[key]] = inputs[key]
            }
        }

        return transformInputs;
    }

    getTransformationMap() {
        return {
            'id': 'id',
            'user_id': 'userId',
            'question_id': 'questionId',
            'description': 'description',
            'excepted': 'excepted',
            'up_vote': 'upVote',
            'down_vote': 'downVote',
            'created_at': 'createdAt',
            'updated_at': 'updatedAt',
            'user': 'user',
        }

    }

}
