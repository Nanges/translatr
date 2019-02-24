import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(private title: Title, private router: Router) {}

    ngOnInit() {
        this.title.setTitle('Login to Translatr');
    }

    navigateToDashboard() {
        this.router.navigate(['dashboard']);
    }
}
