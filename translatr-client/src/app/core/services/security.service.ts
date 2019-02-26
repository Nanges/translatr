import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor() {}

    public authenticate(credentials: Credentials): Observable<any> {
        return of(null).pipe(
            switchMap(() => {
                if (credentials.username === 'fail') {
                    return throwError('Error');
                }
                return of(true);
            })
        );
    }
}

export interface Credentials {
    username: string;
    password: string;
}
