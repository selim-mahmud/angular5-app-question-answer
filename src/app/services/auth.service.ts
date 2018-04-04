import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;

    constructor(private router: Router) {
    }

    login(user: User){
        localStorage.setItem('user', JSON.stringify(user));
        this.authChange.next(true);
        this.router.navigate(['/questions']);
    }

    logout(){
        localStorage.removeItem('user');
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        return localStorage.getItem('user');
    }

    isAuth(){
        let user = this.getUser();
        return user != null;
    }

}
