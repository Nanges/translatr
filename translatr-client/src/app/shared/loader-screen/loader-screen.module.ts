import { NgModule, Injectable, NgZone } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

export const APP_LOADER = 'app-loader';
export const FADEOUT_CLASS = 'fadeout';
export const FADEOUT_DELAY = 400;
export const DEBOUNCE_TIME = 400;

@Injectable({
    providedIn: 'root',
})
export class LoaderScreenService {
    readonly elm: HTMLDivElement;
    private display$ = new Subject<boolean>();
    private transitionTimeout: any;

    constructor(private ngZone: NgZone) {
        this.elm = document.getElementById(APP_LOADER) as HTMLDivElement;
        this.display$
            .pipe(debounce(() => timer(DEBOUNCE_TIME)))
            .subscribe(b => (b ? this._show() : this._hide()));
    }

    show() {
        this.display$.next(true);
    }

    hide() {
        this.display$.next(false);
    }

    private _hide() {
        this.ngZone.runOutsideAngular(() => {
            clearTimeout(this.transitionTimeout);
            this.elm.classList.add(FADEOUT_CLASS);
            this.transitionTimeout = setTimeout(
                () => (this.elm.style.display = 'none'),
                FADEOUT_DELAY
            );
        });
    }

    private _show() {
        this.ngZone.runOutsideAngular(() => {
            clearTimeout(this.transitionTimeout);
            this.elm.style.display = 'block';
            this.transitionTimeout = setTimeout(
                () => this.elm.classList.remove(FADEOUT_CLASS),
                10
            );
        });
    }
}

@NgModule({
    providers: [LoaderScreenService],
})
export class LoaderScreenModule {}
