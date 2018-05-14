import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared';

import AuthModel from '../../models/auth.model';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent {
  private model: AuthModel = new AuthModel();
  private loginAysn: Observable<Object>;
  private radioList: Array<{checked:Boolean,label:String}>;

  constructor(private authService: AuthService) {
    this.radioList = [
      {
        checked: false,
        label: 'radio1'
      },
      {
        checked: false,
        label: 'radio2'
      },
      {
        checked: false,
        label: 'radio3'
      }
    ];
  }

  login(){
    this.authService.login()
      .subscribe(res => {
        debugger;
      });
    // console.log(`login.model.autoLogin=${this.model.autoLogin}`);
    // console.log(`login.radioList=${JSON.stringify(this.radioList)}`);
  }
}
