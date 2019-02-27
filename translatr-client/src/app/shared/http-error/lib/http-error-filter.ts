import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class HttpErrorFilter {
    // if true, error is raised
    abstract filter(r: HttpErrorResponse): boolean;
}

@Injectable()
export class DefaultHttpErrorFilter extends HttpErrorFilter {
    filter(r: HttpErrorResponse): boolean {
        if (r.status <= 400 && r.status !== 0) {
            // ignore error
            return false;
        }

        // error case
        return true;
    }
}
