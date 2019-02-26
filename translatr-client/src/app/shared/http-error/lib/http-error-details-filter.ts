import { Injectable } from '@angular/core';

export abstract class HttpErrorDetailsFilter {
    // if true, error is raised
    abstract showDetails(): boolean;
}

@Injectable()
export class DefaultHttpErrorDetailsFilter extends HttpErrorDetailsFilter {
    showDetails(): boolean {
        return true;
    }
}
