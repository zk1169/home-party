import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    imports: [ CommonModule,SharedModule,DashboardRoutes],
    // providers: [AdService],
    declarations: [
        DashboardComponent, 
        HomeComponent
    ],
    // entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class DashboardModule {}
