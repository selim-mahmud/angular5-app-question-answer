import {Injectable} from '@angular/core';

@Injectable()
export class UserTransformerService {

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
            'name': 'name',
            'email': 'email',
            'activation_token': 'activationToken',
            'remember_token': 'rememberToken',
            'roles': 'roles',
            'questions': 'questions',
            'answers': 'answers',
            'created_at': 'createdAt',
            'updated_at': 'updatedAt',
        }

    }

}
