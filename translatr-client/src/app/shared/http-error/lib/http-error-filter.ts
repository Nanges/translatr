import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class HttpErrorFilter {
    // if true, error is raised
    abstract filter(r: HttpErrorResponse, serviceEnabled: boolean): boolean;
}

@Injectable()
export class DefaultHttpErrorFilter extends HttpErrorFilter {
    filter(r: HttpErrorResponse, serviceEnabled: boolean): boolean {
        if (r.status <= 400 && r.status !== 0) {
            // ignore error
            return false;
        }

        if ((r.status === 401 || r.status === 403) && !serviceEnabled) {
            return false;
        }

        // error case
        return true;
    }
}

@Injectable()
export class AppHttpErrorFilter extends HttpErrorFilter {
    filter(r: HttpErrorResponse, serviceEnabled: boolean): boolean {
        if (r.status < 500 || r.status !== 0) {
            // ignore error
            return false;
        }

        // error case
        return true;
    }
}
