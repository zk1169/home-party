import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EventBus } from '@src/app/shared/index';
import EventModel from '@src/app/models/event.model';
import BaseComponent from '@src/app/models/base-component.model';
import { EventType } from '@src/app/models/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app';
  showProgressBar: Boolean;
  constructor(private snackBar: MatSnackBar, private eventBus: EventBus){
    this.initSubscribEvent();
  }

  initSubscribEvent() {
    this.eventBus.subscribe(EventType.ALERT, (event: EventModel) => {
      this.snackBar.open(event.message, event.action, {
        panelClass: 'customer-snack-bar-panel',
        duration: 3000,
      });
    });
    this.eventBus.subscribe(EventType.PROGRESS_BAR, (show: Boolean) => {
      this.showProgressBar = show;
    });
  }
}
