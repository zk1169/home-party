import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@src/app/shared/shared.module';
import { AuthGuard, CanDeactivateGuard } from '@src/app/shared';
import { DialogAlert } from '@src/app/shared';
import { AuthService } from '@src/app/shared';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { SettingComponent } from './setting-component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    imports: [ CommonModule,SharedModule,DashboardRoutes],
    providers: [CanDeactivateGuard, AuthService],
    declarations: [
        DashboardComponent, 
        HomeComponent,
        SettingComponent,
        DialogAlert
    ],
    entryComponents: [ DialogAlert ],
})
export class DashboardModule {}
