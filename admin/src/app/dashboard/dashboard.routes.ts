import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { SettingComponent } from './setting-component';
import { CanDeactivateGuard } from '@src/app/shared/index';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent, canDeactivate: [CanDeactivateGuard] },
        { path: 'setting', component: SettingComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
