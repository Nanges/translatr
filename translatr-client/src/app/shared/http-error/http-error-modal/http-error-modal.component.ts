import { Component, OnInit } from '@angular/core';
import { HttpErrorService } from '../http-error.service';
import { HttpErrorDetailsFilter } from '../lib/http-error-details-filter';

@Component({
    selector: 'app-http-error-modal',
    templateUrl: './http-error-modal.component.html',
    styleUrls: ['./http-error-modal.component.scss'],
})
export class HttpErrorModalComponent implements OnInit {
    constructor(
        private httpError: HttpErrorService,
        private detailsFilter: HttpErrorDetailsFilter
    ) {}

    ngOnInit() {
        this.httpError.error$.subscribe(e => {
            if (this.detailsFilter.showDetails()) {
                alert('ok');
            }
        });
    }
}
