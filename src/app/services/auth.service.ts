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
        this.user = user;
        this.authChange.next(true);
        this.router.navigate(['/questions']);
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        return { ...this.user };
    }

    isAuth(){
        return this.user != null;
    }

}
