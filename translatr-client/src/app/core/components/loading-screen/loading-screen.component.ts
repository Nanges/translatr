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
                tap(show => this.sequence(show)),
                delayWhen(show => timer(show ? 0 : 400))
            )
            .subscribe(show => this.sequence(show, 1));
    }

    private sequence(r: boolean, i = 0) {
        const sequence = r
            ? [() => (this.hidden = false), () => (this.fadeIn = true)]
            : [() => (this.fadeIn = false), () => (this.hidden = true)];

        sequence[i]();
    }
}
