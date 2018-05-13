import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
