import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    HttpErrorFilter,
    DefaultHttpErrorFilter,
} from './lib/http-error-filter';
import {
    HttpRequestStateHandler,
    DefaultHttpRequestStateHandler,
} from './lib/http-request-state';
import {
    HttpErrorDetailsFilter,
    DefaultHttpErrorDetailsFilter,
} from './lib/http-error-details-filter';
import { HttpErrorService } from './http-error.service';
import { HttpErrorModalComponent } from './http-error-modal/http-error-modal.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error-interceptor';

export interface HttpErrorConfig {
    httpErrorFilter?: Provider;
    httpErrorDetailsFilter?: Provider;
    httpRequestStateHandler?: Provider;
}

@NgModule({
    imports: [CommonModule],
    declarations: [HttpErrorModalComponent],
    exports: [HttpErrorModalComponent],
})
export class HttpErrorModule {
    static forRoot(config: HttpErrorConfig = {}): ModuleWithProviders {
        return {
            ngModule: HttpErrorModule,
            providers: [
                HttpErrorService,
                config.httpErrorFilter || {
                    provide: HttpErrorFilter,
                    useClass: DefaultHttpErrorFilter,
                },
                config.httpErrorDetailsFilter || {
                    provide: HttpErrorDetailsFilter,
                    useClass: DefaultHttpErrorDetailsFilter,
                },
                config.httpRequestStateHandler || {
                    provide: HttpRequestStateHandler,
                    useClass: DefaultHttpRequestStateHandler,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpErrorInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
