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
import { getIgnoredCodes } from './lib/decorators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private service: HttpErrorService,
        private requestState: HttpRequestStateHandler,
        private errorFilter: HttpErrorFilter
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        debugger;
        const state = this.requestState.captureState(req.clone());
        return next.handle(req).pipe(
            tap(null, e => {
                if (this.filter(e, getIgnoredCodes())) {
                    this.service.intercept(e, state);
                }
            })
        );
    }

    private filter(e: any, ignoredCodes: number[]): boolean {
        debugger;
        if (!(e instanceof HttpErrorResponse)) {
            return false;
        }

        if (ignoredCodes && ignoredCodes.indexOf(e.status) > -1) {
            return false;
        }

        return this.errorFilter.filter(e);
    }
}
