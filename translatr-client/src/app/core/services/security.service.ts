import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { skipErrorIfStatus } from 'src/app/shared/http-error/lib/decorators';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor(private http: HttpClient) {}

    @skipErrorIfStatus(0, 404)
    public authenticate(credentials: Credentials): Observable<any> {
        return this.http.get('http://localhost:80/foo');
        // return of(null).pipe(
        //     switchMap(() => {
        //         if (credentials.username === 'fail') {
        //             return throwError('Error');
        //         }
        //         return of(true);
        //     })
        // );
    }
}

export interface Credentials {
    username: string;
    password: string;
}
