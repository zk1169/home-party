import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBar, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
// import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { AppRoute } from './app.routes';

import { SignModule } from '../sign/sign.module';
import { HttpService, AppStateService, EventBus, AuthGuard, AuthService } from '@src/app/shared';
// import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AppRoute,
    SignModule
  ],
  providers: [
    HttpService,
    EventBus,
    AppStateService,
    AuthGuard,
    AuthService,
    //MatSnackBar
    // {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 10000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
