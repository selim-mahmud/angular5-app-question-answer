import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../app-config.module";
import {AppUrlService} from "./app-url.service";

@Injectable()
export class ApiUrlService {

    /**
     * @constructor
     */
    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private appUrlService: AppUrlService
    ) {

    }

    /**
     * @param {string} resourceName
     * @return {string}
     */
    baseResourceUrl(resourceName: string): string {
        return this.config.apiBaseUrl + resourceName;
    }

    /**
     * @param {string} resourceUrl
     * @return {string}
     */
    allFields(resourceUrl: string): string {
        let param = '?fields=all';
        if(resourceUrl.includes('?')){
            param = '&fields=all';
        }
        return resourceUrl + param;
    }

    /**
     * @param {string} resourceUrl
     * @return {string}
     */
    addPageNumber(resourceUrl: string): string {
        let pageNumber: number = this.appUrlService.getCurrentPageNumber();
        if(pageNumber === 0){
            return resourceUrl;
        }
        let param = '?page=' + pageNumber;
        if(resourceUrl.includes('?')){
            param = '&page=' + pageNumber;
        }
        return resourceUrl + param;
    }

    /**
     * @param {string} resourceUrl
     * @param {number} limit
     * @return {string}
     */
    addPaginationLimit(resourceUrl: string, limit: number = 25): string {
        let param = '?limit=' + limit;
        if(resourceUrl.includes('?')){
            param = '&limit=' + limit;
        }
        return resourceUrl + param;
    }

    /**
     * @param {string} resourceUrl
     * @param {string[]} relations
     * @return {string}
     */
    addRelations(resourceUrl: string, relations: string[]): string {

        let param = '?';
        if(resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < relations.length; i++) {

            if(i === 0){
                param += 'add_relations[' + i + ']='+relations[i];
            }else{
                param += '&add_relations[' + i + ']='+relations[i];
            }
        }

        return resourceUrl + param;
    }

    /**
     * @return {string}
     */
    addColumnFilters(resourceUrl: string, filters): string {

        let param = '?';
        if(resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < filters.length; i++) {

            if(i === 0){
                param += 'columns[' + i + '][c]='+filters[i]['c'];
            }else{
                param += '&columns[' + i + '][c]='+filters[i]['c'];
            }
            param += '&columns[' + i + '][o]='+filters[i]['o'];
            param += '&columns[' + i + '][v]='+filters[i]['v'];
        }

        return resourceUrl + param;
    }

    /**
     * @return {string}
     */
    addSortings(resourceUrl: string, sortings: string[][]): string {

        let param = '?';
        if(resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < sortings.length; i++) {

            if(i === 0){
                param += 'sortings[' + sortings[i][0] + ']='+sortings[i][1];
            }else{
                param += '&sortings[' + sortings[i][0] + ']='+sortings[i][1];
            }
        }

        return resourceUrl + param;
    }

    /**
     * @return {string}
     */
    addRelationFilters(resourceUrl: string, relationFilters): string {

        let param = '?';
        if(resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < relationFilters.length; i++) {

            if(i === 0){
                param += 'relations[' + i + '][rn]='+relationFilters[i]['rn'];
            }else{
                param += '&relations[' + i + '][rn]='+relationFilters[i]['rn'];
            }
            param += '&relations[' + i + '][ro]='+relationFilters[i]['ro'];
            param += '&relations[' + i + '][rv]='+relationFilters[i]['rv'];
        }

        return resourceUrl + param;
    }

}
