import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import {SnackBarServiceService} from "./snack-bar-service.service";

@Injectable()
export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;

    constructor(
        private router: Router,
        private snackBarService: SnackBarServiceService
    ) {
    }

    login(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
        this.authChange.next(true);
        this.snackBarService.openSnackBar('You have been logged in successfully', '');
        this.router.navigate(['/questions']);
    }

    logout() {
        localStorage.removeItem('user');
        this.authChange.next(false);
        this.snackBarService.openSnackBar('You have been logged out successfully', '');
        this.router.navigate(['/login']);
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    isAuth() {
        let user = this.getUser();
        return user != null;
    }

}
