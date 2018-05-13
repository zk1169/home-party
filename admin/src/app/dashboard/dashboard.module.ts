import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard-component';
import { HomeComponent } from './home-component';
import { DemoComponent } from './demo-component';
import { AdBannerComponent } from './banner-component';
import { HeroJobAdComponent } from './banner-component/hero-job-ad.component';
import { HeroProfileComponent } from './banner-component/hero-profile-ad.component';

import { AdService } from './banner-component/ad.service';
import { AdDirective } from './banner-component/ad.directive';

import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    imports: [ CommonModule,SharedModule,DashboardRoutes],
    providers: [AdService],
    declarations: [
        DashboardComponent, 
        HomeComponent, 
        DemoComponent,
        AdBannerComponent, 
        AdDirective, 
        HeroJobAdComponent,
        HeroProfileComponent
    ],
    entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class DashboardModule {}
