import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../shared';

import AuthModel from '../../models/auth.model';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent {
  model: AuthModel = new AuthModel();
  loginAysn: Observable<any>;

  constructor(private authService: AuthService) {
  }

  login(){
    this.loginAysn = this.authService.login()
      .pipe(
        map(res => {
        })
      );
    // console.log(`login.model.autoLogin=${this.model.autoLogin}`);
    // console.log(`login.radioList=${JSON.stringify(this.radioList)}`);
  }
}
