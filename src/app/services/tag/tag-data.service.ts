import {Injectable} from '@angular/core';
import {TagApiService} from "./tag-api.service";

@Injectable()
export class TagDataService {

    constructor(private tagApiService: TagApiService) {
    }

    getAllTags() {
        return this.tagApiService.getAllTags();
    }

}
