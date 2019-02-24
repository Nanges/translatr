import { Component, OnInit, HostBinding } from '@angular/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
} from '@angular/router';
import { filter, debounce, tap, map, delayWhen } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
    selector: 'app-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent implements OnInit {
    @HostBinding('class.fadein')
    fadeIn: boolean = false;

    @HostBinding('class.d-none')
    hidden: boolean = true;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events
            .pipe(
                filter(
                    e =>
                        e instanceof NavigationStart ||
                        e instanceof NavigationEnd ||
                        e instanceof NavigationCancel ||
                        e instanceof NavigationError
                ),
                map(e => e instanceof NavigationStart),
                debounce(() => timer(400)), // average duration of navigation
                tap(show => {
                    if (show) {
                        this.hidden = false;
                    } else {
                        this.fadeIn = false;
                    }
                }),
                delayWhen(show => timer(show ? 0 : 400))
            )
            .subscribe(show => {
                if (show) {
                    this.fadeIn = true;
                } else {
                    this.hidden = true;
                }
            });
    }
}
