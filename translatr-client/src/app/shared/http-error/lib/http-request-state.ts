import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export abstract class HttpRequestStateHandler {
    // if true, error is raised
    abstract captureState(req: HttpRequest<any>): any;
}

@Injectable()
export class DefaultHttpRequestStateHandler extends HttpRequestStateHandler {
    captureState(req: HttpRequest<any>): any {
        return {
            url: req.url,
        };
    }
}
