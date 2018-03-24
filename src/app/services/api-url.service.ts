import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl;

@Injectable()
export class ApiUrlService {

    resourceUrl: string = API_BASE_URL;

    /**
     * @constructor
     */
    constructor() {
    }

    /**
     * @param {string} resourceName
     * @return {this}
     */
    baseResourceUrl(resourceName: string): this {
        this.resourceUrl = this.resourceUrl + resourceName;
        return this;
    }

    /**
     * @return {this}
     */
    allFields(): this {
        let param = '?fields=all';
        if(this.resourceUrl.includes('?')){
            param = '&fields=all';
        }
        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * @return {this}
     */
    addRelations(relations: string[]): this {

        let param = '?';
        if(this.resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < relations.length; i++) {

            if(i === 0){
                param += 'add_relations[' + i + ']='+relations[i];
            }else{
                param += '&add_relations[' + i + ']='+relations[i];
            }
        }

        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * @return {this}
     */
    addColumnFilters(filters): this {

        let param = '?';
        if(this.resourceUrl.includes('?')){
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

        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * @return {this}
     */
    addSortings(sortings: string[][]): this {

        let param = '?';
        if(this.resourceUrl.includes('?')){
            param = '&';
        }

        for (let i = 0; i < sortings.length; i++) {

            if(i === 0){
                param += 'sortings[' + sortings[i][0] + ']='+sortings[i][1];
            }else{
                param += '&sortings[' + sortings[i][0] + ']='+sortings[i][1];
            }
        }

        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * @return {this}
     */
    addRelationFilters(relationFilters): this {

        let param = '?';
        if(this.resourceUrl.includes('?')){
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

        this.resourceUrl = this.resourceUrl + param;
        return this;
    }

    /**
     * get api base url
     * @return {string}
     */
    getUrl(): string {
        return this.resourceUrl;
    }

}
