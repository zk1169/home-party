import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import * as _ from 'lodash';
import { AppStateService, AuthService } from '@src/app/shared';
import { AlertDialog } from '../dialogs/alert';
import { EventBus } from '@src/app/shared/index';
import EventModel from '@src/app/models/event.model';
import { BaseComponent } from '@src/app/models/base-component';
import { EventType } from '@src/app/models/enum';

@Component({
  selector: 'dashboard-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DashboardComponent extends BaseComponent {
  menuShow: Boolean = true;
  pageTitle: String;

  constructor(
    private appState: AppStateService,
    private router: Router, 
    private authService: AuthService,
    public dialog: MatDialog,
    eventBus: EventBus
  ){
    super(eventBus);
    eventBus.subscribe(EventType.PAGE_TITLE_CHANGE, (title: String) => {
      this.pageTitle = title || '';
    });
  }

  get UserName() {
    return _.get(this.appState, 'authModel.userName') || 'Admin';
  }

  logOut() {
    let dialogRef = this.dialog.open(AlertDialog, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.authService.loginout().subscribe(
          (res) => {
            if (res) {
              this.appState.logout();
              this.router.navigate(['/sign/login']);
            }
          }
        );
      }
    });
  }
}
