import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { HttpErrorFilter } from './lib/http-error-filter';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class HttpErrorService {
    private httpError$ = new Subject<HttpErrorContext>();

    constructor() {}

    intercept(e: HttpErrorResponse, requestState: any) {
        this.httpError$.next({
            httpErrorResponse: e,
            requestState,
        });
    }

    get error$(): Observable<HttpErrorContext> {
        return this.httpError$.asObservable();
    }
}

export interface HttpErrorContext {
    httpErrorResponse: HttpErrorResponse;
    requestState: any;
}
