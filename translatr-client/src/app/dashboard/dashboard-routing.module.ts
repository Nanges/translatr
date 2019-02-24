import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardResolver } from './resolvers/dashbord-resolver';

const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        resolve: {
            truthy: DashboardResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [DashboardResolver],
})
export class DashboardRoutingModule {}
