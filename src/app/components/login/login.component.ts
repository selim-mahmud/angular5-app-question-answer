import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDataService} from "../../services/user/user-data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private userDataService: UserDataService) {
    }

    ngOnInit() {
        this.validateForm();
    }

    onSubmit(){

        let loginDetail: Object = {email : this.loginForm.value.email, password: this.loginForm.value.password};

        this.userDataService.getLoginResponse(loginDetail).subscribe(response => {
            console.log(response);
        });

    }

    validateForm() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.maxLength(20),
                Validators.minLength(5),
            ])
        });
    }

}
