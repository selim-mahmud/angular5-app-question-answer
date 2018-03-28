import {Component, Input, OnInit} from '@angular/core';
import {PaginationMeta} from '../../models/paginationMeta';
import {AppUrlService} from '../../services/app-url.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input() paginationMeta: PaginationMeta;
    @Input() pagesToShow: number;
    @Input() total: number;

    constructor(private appUrlService: AppUrlService) {
    }

    ngOnInit() {
        console.log(this.appUrlService.getFullUrlExceptPaginationParam());
    }

    getTotalCount(): number {
        return this.paginationMeta.total;
    }

    getMin(): number {
        return ((this.paginationMeta.perPage * this.paginationMeta.currentPage) - this.paginationMeta.perPage) + 1;
    }

    getMax(): number {
        let max = this.paginationMeta.perPage * this.paginationMeta.currentPage;
        if (max > this.paginationMeta.total) {
            max = this.paginationMeta.total;
        }
        return max;
    }

    totalPages(): number {
        return Math.ceil(this.paginationMeta.total / this.paginationMeta.perPage) || 0;
    }


    lastPage(): boolean {
        return this.paginationMeta.perPage * this.paginationMeta.currentPage > this.paginationMeta.total;
    }

    getPages(): number[] {
        const c = Math.ceil(this.paginationMeta.total / this.paginationMeta.perPage);
        const p = this.paginationMeta.currentPage || 1;
        const pagesToShow = this.pagesToShow || 9;
        const pages: number[] = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    }
}
