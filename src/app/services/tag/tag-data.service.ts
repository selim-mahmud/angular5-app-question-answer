import {Injectable} from '@angular/core';
import {TagApiService} from "./tag-api.service";
import {Observable} from "rxjs/Observable";
import {Tag} from "../../models/tag";

@Injectable()
export class TagDataService {

    constructor(private tagApiService: TagApiService) {
    }

    getAllTags() {
        return this.tagApiService.getAllTags();
    }

    getQuestionsByTagId(id: string) {
        return this.tagApiService.getQuestionsByTagId(id);
    }

    getTagById(id: string): Observable<Tag> {
        return this.tagApiService.getTagById(id);
    }

}
