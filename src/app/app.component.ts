import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from "./services/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    static readonly title: string = 'Q&A - An Angular App';
    isAuth: boolean = false;
    authSubscription: Subscription;

    public constructor(
        private titleService: Title,
        private authService: AuthService
   ) {

    }

    ngOnInit() {
        this.titleService.setTitle(AppComponent.title);

        this.authSubscription = this.authService.authChange.subscribe(authStatus => {
            this.isAuth = authStatus;
        });
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.authSubscription.unsubscribe();
    }

}
