import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        LoginPageComponent,
        LoadingScreenComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    exports: [LoadingScreenComponent],
})
export class CoreModule {}
