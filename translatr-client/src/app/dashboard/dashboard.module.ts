import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, FormsModule],
=======
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, CoreModule],
>>>>>>> c96e7b5eda9f5bf594c42eaaee670c995bf1e528
})
export class DashboardModule {}
