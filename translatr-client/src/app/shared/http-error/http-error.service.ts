import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { HttpErrorFilter } from './lib/http-error-filter';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class HttpErrorService {
    private _enabled: boolean;

    private httpError$ = new Subject<HttpErrorContext>();

    constructor(private errorFilter: HttpErrorFilter) {}

    intercept(e: HttpErrorResponse, requestState: any) {
        if (this.errorFilter.filter(e, this._enabled)) {
            this.httpError$.next({
                httpErrorResponse: e,
                requestState,
            });
        }
    }

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    get error$(): Observable<HttpErrorContext> {
        return this.httpError$.asObservable();
    }
}

export interface HttpErrorContext {
    httpErrorResponse: HttpErrorResponse;
    requestState: any;
}
