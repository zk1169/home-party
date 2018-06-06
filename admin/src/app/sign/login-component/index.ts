import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, AppStateService, EventBus } from '@src/app/shared';
import { BaseComponent } from '@src/app/models/base-component';
import AuthModel from '@src/app/models/auth.model';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent extends BaseComponent {
  model: AuthModel = new AuthModel();
  loginAysn: Observable<any>;

  constructor(
    private authService: AuthService, 
    private appState: AppStateService, 
    private router: Router, 
    eventBus: EventBus) {
    super(eventBus);
  }

  login(){
    this.startProgressBar();
    this.loginAysn = this.authService.login(this.model)
      .pipe(
        map(res => {
          this.stopProgressBar();
          if (res) {
            this.appState.authModel = this.model;
            if (this.appState.redirectUrl) {
              this.router.navigate([this.appState.redirectUrl]);
            } else {
                this.router.navigate(['/dashboard/liuyan']);
            }
          } else {
            this.appState.authModel = null;
            this.warnAlert('用户名或密码错误');
          }
        })
      );
    // console.log(`login.model.autoLogin=${this.model.autoLogin}`);
    // console.log(`login.radioList=${JSON.stringify(this.radioList)}`);
  }

  keydown(ev) {
    if (ev.keyCode === 13) {
      this.login();
    }
  }
}
