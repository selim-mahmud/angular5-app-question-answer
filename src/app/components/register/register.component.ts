import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDataService} from "../../services/user/user-data.service";
import {
    ConfirmEqualValidator, ConfirmValidParentMatcher,
    errorMessages
} from "../../custom-validator/confirm-equal-validator";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    userRegistrationForm: FormGroup;
    loadingSpinner = false;
    invalidData = false;

    confirmValidParentMatcher = new ConfirmValidParentMatcher();
    errors = errorMessages;

    constructor(private formBuilder: FormBuilder,
                private userDataService: UserDataService,
                private router: Router
    ) {
    }

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        this.loadingSpinner = true;
        let inputs = {
            name: this.userRegistrationForm.value.name,
            email: this.userRegistrationForm.value.email,
            password: this.userRegistrationForm.value.passwordGroup.password,
            password_confirmation: this.userRegistrationForm.value.passwordGroup.password_confirmation,
        };

        this.userDataService.getRegisterResponse(inputs).subscribe(response => {

            if(response.data.status === 'success'){
                this.router.navigate(['/login']);
            }else{
                this.invalidData = true;
            }

            this.loadingSpinner = false;
        });

    }

    createForm() {
        this.userRegistrationForm = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(128)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            passwordGroup: this.formBuilder.group({
                password: ['', [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(20)
                ]],
                password_confirmation: ['', Validators.required]
            }, {validator: ConfirmEqualValidator.childrenEqual})
        });
    }

}
