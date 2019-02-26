import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { HttpErrorService } from './http-error.service';
import { HttpErrorFilter } from './lib/http-error-filter';
import { HttpRequestStateHandler } from './lib/http-request-state';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private service: HttpErrorService,
        private requestState: HttpRequestStateHandler
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const state = this.requestState.captureState(req.clone());
        return next.handle(req).pipe(
            tap(null, e => {
                if (e instanceof HttpErrorResponse) {
                    this.service.intercept(e, state);
                }
            })
        );
    }
}
