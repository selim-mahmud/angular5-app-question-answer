import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDataService} from "../../services/user/user-data.service";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    invalidAuth = false;
    loadingSpinner = false;
    loginSubscription: Subscription;

    constructor(private userDataService: UserDataService, private authService: AuthService) {
    }

    ngOnInit() {
        this.validateForm();
    }

    onSubmit(){
        this.loadingSpinner = true;
        let loginDetail: Object = {email : this.loginForm.value.email, password: this.loginForm.value.password};

        this.loginSubscription = this.userDataService.getLoginResponse(loginDetail).subscribe(response => {

            if (typeof response.data.status !== 'undefined') {
                this.invalidAuth = true;
            }else{
                let user = new User(response.data);
                this.authService.login(user);
            }
            this.loadingSpinner = false;
        });

    }

    onInputFocus(){
        this.invalidAuth = false;
    }

    validateForm() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.maxLength(20),
                Validators.minLength(5),
            ])
        });
    }

    ngOnDestroy(){
        this.loginSubscription.unsubscribe();
    }

}
