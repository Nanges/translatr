import { Component } from '@angular/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LoaderScreenService } from './shared/loader-screen/loader-screen.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'translatr-client';
    showPassword = false;

    /**
     *
     */
    constructor(loader: LoaderScreenService, router: Router) {
        router.events
            .pipe(
                filter(
                    e =>
                        e instanceof NavigationStart ||
                        e instanceof NavigationEnd ||
                        e instanceof NavigationCancel ||
                        e instanceof NavigationError
                ),
                map(e => e instanceof NavigationStart)
            )
            .subscribe(show => (show ? loader.show() : loader.hide()));

        loader.hide();
    }
}
