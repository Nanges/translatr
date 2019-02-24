import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder) {}

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

        // console.log(this.form.getRawValue());
        this.loginSuccess.emit(true);
    }

    togglePassword() {
        this.passwordShown = !this.passwordShown;
    }
}
