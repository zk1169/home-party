import { MatSnackBarConfig } from "@angular/material";

export default class EventModel {
  eventName: string;
	message: string;
	type: string;
  action: string;
  config: MatSnackBarConfig

	constructor(){
  }
  
  static getInfoEvent(msg: string) {
    const model = new EventModel();
    model.message = msg;
    model.type = 'info';
    return model;
  }
}
