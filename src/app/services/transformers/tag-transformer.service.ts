import {Injectable} from '@angular/core';

@Injectable()
export class TagTransformerService {

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
            'slug': 'slug',
            'active': 'active',
            'created_at': 'createdAt',
            'updated_at': 'updatedAt',
        }

    }

}
