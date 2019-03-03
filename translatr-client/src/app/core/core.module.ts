import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { SecurityService } from './services/security.service';
import { LoginOverlayComponent } from './components/login-overlay/login-overlay.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
    ],
    declarations: [
        LoginFormComponent,
        LoginPageComponent,
        LoginOverlayComponent,
    ],
    providers: [SecurityService],
    exports: [LoginOverlayComponent],
})
export class CoreModule {}
