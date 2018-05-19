import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, AppStateService, EventBus } from '@src/app/shared';
import BaseComponent from '@src/app/models/base-component.model';
import EventModel from '@src/app/models/event.model';
import AuthModel from '@src/app/models/auth.model';
import { EventType } from '@src/app/models/enum';

@Component({
  selector: 'login-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class LoginComponent extends BaseComponent {
  model: AuthModel = new AuthModel();
  loginAysn: Observable<any>;

  constructor(private authService: AuthService, private appState: AppStateService, eventBus: EventBus) {
    super(eventBus);
  }

  login(){
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.loginAysn = this.authService.login(this.model)
      .pipe(
        map(res => {
          if (res) {
            this.appState.authModel = this.model;
          } else {
            this.appState.authModel = null;
          }
          this.eventNotice(EventType.ALERT ,EventModel.getInfoEvent('登录成功'));
        })
      );
    // console.log(`login.model.autoLogin=${this.model.autoLogin}`);
    // console.log(`login.radioList=${JSON.stringify(this.radioList)}`);
  }
}
