import { BaseModel } from './base.model';

export class LiuyanModel extends BaseModel {
	name: string;
	phone: string;
  city: string;
  message: string;

	constructor(){
		super();
  }
  
  toModel(jsonObj) {
    super.toModel(jsonObj);
    this.name = jsonObj.name;
    this.phone = jsonObj.phone;
    this.city = jsonObj.city;
    this.message = jsonObj.message;
    return this;
}
}
