import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
    data = [
        {
            label: 'COMMON',
            data: 'COMMON',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
                {
                    label: 'YES',
                    data: 'Work Folder',
                    icon: 'pi pi-key',
                },
                {
                    label: 'NO',
                    data: 'Home Folder',
                    icon: 'pi pi-key',
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit() {}
}
