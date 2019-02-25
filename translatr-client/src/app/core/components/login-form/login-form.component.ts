import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService, Credentials } from '../../services/security.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
    passwordShown = false;
    submitting = false;
    form: FormGroup;

    @Output()
    loginSuccess = new EventEmitter();

    constructor(private fb: FormBuilder, private security: SecurityService) {}

    get username() {
        return this.form.get('username');
    }

    get password() {
        return this.form.get('password');
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: [null, Validators.required],
            password: [null, Validators.required],
        });
    }

    submit() {
        this.form.disable();
        this.submitting = true;
        this.security
            .authenticate(this.form.getRawValue() as Credentials)
            .subscribe(
                () => {
                    this.loginSuccess.emit(true);
                },
                () => {
                    this.submitting = false;
                    this.form.enable();
                }
            );
    }

    togglePassword() {
        this.passwordShown = !this.passwordShown;
    }
}
