import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorModule } from './shared/http-error/http-error.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/http-error/http-error-interceptor';
import {
    HttpErrorFilter,
    AppHttpErrorFilter,
} from './shared/http-error/lib/http-error-filter';

@NgModule({
    declarations: [AppComponent],
    imports: [
        // angulr concern
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        // translatr concern
        CoreModule,
        HttpErrorModule.forRoot({
            httpErrorFilter: {
                provide: HttpErrorFilter,
                useClass: AppHttpErrorFilter,
            },
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
