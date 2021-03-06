import {Injectable} from '@angular/core';
import {UserApiService} from "./user-api.service";
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";

@Injectable()
export class UserDataService {

    constructor(private userApiService: UserApiService) {
    }

    getAllUser() {
        return this.userApiService.getAllUsers();
    }

    getUserById(id: string): Observable<User> {
        return this.userApiService.getUserById(id);
    }

    getQuestionsByUserId(id: string) {
        return this.userApiService.getQuestionsByUserId(id);
    }

    getLoginResponse(loginDetails: object): Observable<any> {
        return this.userApiService.getLoginResponse(loginDetails);
    }

    getRegisterResponse(inputs: object): Observable<any> {
        return this.userApiService.getRegisterResponse(inputs);
    }

}
