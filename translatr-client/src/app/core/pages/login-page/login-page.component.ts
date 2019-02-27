import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpErrorService } from 'src/app/shared/http-error/http-error.service';

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
    constructor(
        private title: Title,
        private router: Router,
        private httpError: HttpErrorService
    ) {}

    ngOnInit() {
        this.title.setTitle('Login to Translatr');
        // this.httpError.disable();
    }

    ngOnDestroy(): void {
        // this.httpError.enable();
    }

    navigateToDashboard() {
        this.router.navigate(['dashboard']);
    }
}
