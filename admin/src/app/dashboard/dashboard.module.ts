import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpModule, JsonpModule } from '@angular/http';

import { SharedModule } from '@src/app/shared/shared.module';
import { AuthGuard, CanDeactivateGuard } from '@src/app/shared';
import { AlertDialog } from './dialogs/alert';
// import { AuthService } from '@src/app/shared';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { LiuyanComponent } from './liuyan-component';
import { SettingComponent } from './setting-component';
import { CityComponent } from './city-component';
import { StoreListComponent } from './store-list-component';
import { StoreDetailComponent } from './store-detail-component';
import { BannerListComponent } from './banner-list-component';
import { BannerDetailComponent } from './banner-detail-component';
import { StoryListComponent } from './story-list-component';
import { StoryDetailComponent } from './story-detail-component';

import { DashboardRoutes } from './dashboard.routes';
import { MatDialogModule } from '@angular/material';

@NgModule({
    imports: [ SharedModule,DashboardRoutes, MatDialogModule],
    providers: [CanDeactivateGuard],
    declarations: [
        DashboardComponent, 
        HomeComponent,
        LiuyanComponent,
        SettingComponent,
        StoreListComponent,
        StoreDetailComponent,
        CityComponent,
        BannerListComponent,
        BannerDetailComponent,
        StoryListComponent,
        StoryDetailComponent,
        AlertDialog
    ],
    entryComponents: [ DashboardComponent, AlertDialog ],
})
export class DashboardModule {}
