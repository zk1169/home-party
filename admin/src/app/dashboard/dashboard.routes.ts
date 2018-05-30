import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { LiuyanComponent } from './liuyan-component';
import { SettingComponent } from './setting-component';
import { StoreListComponent } from './store-list-component';
import { StoreDetailComponent } from './store-detail-component';
import { CanDeactivateGuard } from '@src/app/shared/index';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'liuyan', pathMatch: 'full'},
        { path: 'home', component: HomeComponent, canDeactivate: [CanDeactivateGuard] },
        { path: 'liuyan', component: LiuyanComponent },
        { path: 'setting', component: SettingComponent },
        { path: 'store-list', component: StoreListComponent },
        { path: 'store-detail/:id', component: StoreDetailComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
