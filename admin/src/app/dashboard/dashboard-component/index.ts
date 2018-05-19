import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import * as _ from 'lodash';
import { AppStateService, AuthService } from '@src/app/shared';
import { DialogAlert } from '@src/app/shared';

@Component({
  selector: 'dashboard-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DashboardComponent {
  menuShow: Boolean;
  constructor(
    private appState: AppStateService,
    private router: Router, 
    private authService: AuthService,
    public dialog: MatDialog
  ){

  }

  get UserName() {
    return _.get(this.appState, 'authModel.userName', 'Admin222');
  }

  logOut() {
    let dialogRef = this.dialog.open(DialogAlert, {
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
