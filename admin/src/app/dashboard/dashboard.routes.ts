import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { LiuyanComponent } from './liuyan-component';
import { SettingComponent } from './setting-component';
import { CityComponent } from './city-component';
import { StoreListComponent } from './store-list-component';
import { StoreDetailComponent } from './store-detail-component';
import { BannerListComponent } from './banner-list-component';
import { BannerDetailComponent } from './banner-detail-component';
import { CanDeactivateGuard } from '@src/app/shared/index';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
    	{ path: '', redirectTo: 'liuyan', pathMatch: 'full'},
        { path: 'home', component: HomeComponent, canDeactivate: [CanDeactivateGuard] },
        { path: 'liuyan', component: LiuyanComponent },
        { path: 'setting', component: SettingComponent },
        { path: 'city', component: CityComponent },
        { path: 'store-list', component: StoreListComponent },
        { path: 'store-detail', component: StoreDetailComponent },
        { path: 'store-detail/:id', component: StoreDetailComponent },
        { path: 'banner-list', component: BannerListComponent },
        { path: 'banner-detail', component: BannerDetailComponent },
        { path: 'banner-detail/:id', component: BannerDetailComponent }
    ]
}];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
