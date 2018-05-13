import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { DemoComponent } from './demo-component';
// import { AdBannerComponent } from './banner-component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'demo', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'demo', component: DemoComponent },
        // { path: 'ad', component: AdBannerComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
