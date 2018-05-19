import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSnackBar, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
// import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { AppRoute } from './app.routes';

import { SignModule } from '../sign/sign.module';
import { AppStateService, EventBus } from '@src/app/shared';
// import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AppRoute,
    SignModule
  ],
  providers: [
    EventBus,
    AppStateService,
    //MatSnackBar
    // {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 10000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
