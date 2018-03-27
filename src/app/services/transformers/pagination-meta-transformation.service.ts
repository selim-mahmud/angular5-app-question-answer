import {Injectable} from '@angular/core';
import {PaginationMeta} from "../../models/paginationMeta";

@Injectable()
export class PaginationMetaTransformationService {

    constructor() {
    }

    transformInputs(inputs): PaginationMeta
    {
        let mapObj = this.getTransformationMap();
        let transformInputs: PaginationMeta = new PaginationMeta();

        for (let key in inputs) {
            if (mapObj.hasOwnProperty(key)) {

                transformInputs[mapObj[key]] = inputs[key]
            }
        }

        return transformInputs;
    }

    getTransformationMap() {
        return {
            'current_page': 'currentPage',
            'last_page': 'lastPage',
            'from': 'from',
            'to': 'to',
            'per_page': 'perPage',
            'total': 'total',
            'path': 'path',
        }

    }

}
