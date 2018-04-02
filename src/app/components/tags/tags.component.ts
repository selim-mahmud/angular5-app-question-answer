import {Component, OnInit} from '@angular/core';
import {Tag} from "../../models/tag";
import {TagDataService} from "../../services/tag/tag-data.service";

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    tags: Tag[];
    loadingSpinner: boolean = true;
    isRecords: boolean = false;

    constructor(
        private tagDataService: TagDataService
    ) {
    }

    ngOnInit() {
        this.getTags();
    }

    getTags(): void {
        this.tagDataService.getAllTags().subscribe(response => {
            this.tags = response.tags;
            this.loadingSpinner = false;
            this.isRecords = this.tags.length === 0;
        });
    }

}
