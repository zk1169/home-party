import { BaseModel } from './base.model';

export class CityModel extends BaseModel {
	name: string;

	constructor(){
		super();
  }
  
  toModel(jsonObj) {
    super.toModel(jsonObj);
    this.name = jsonObj.name;
    return this;
  }
}

export class StoreModel extends BaseModel {
	name: string;
	address: string;
  price: string;
  cover: string;
  coverBig: string;
  playItems: string;
  priceWorkday: string;
  priceWeekend: string;
  allPrice: string;
  orderNumber: string;
  openTime: string;
  section1: string;
  section2: string;
  section3: string;
  section4: string;
  section5: string;
  city: CityModel;

	constructor(){
		super();
  }
  
  toModel(jsonObj) {
    super.toModel(jsonObj);
    this.name = jsonObj.name;
    this.address = jsonObj.address;
    this.price = jsonObj.price;
    this.cover = jsonObj.coverBig;
    this.coverBig = jsonObj.coverBig;
    this.playItems = jsonObj.playItems;
    this.priceWorkday = jsonObj.priceWorkday;
    this.priceWeekend = jsonObj.priceWeekend;
    this.allPrice = jsonObj.allPrice;
    this.orderNumber = jsonObj.orderNumber;
    this.openTime = jsonObj.openTime;
    this.section1 = jsonObj.section1;
    this.section2 = jsonObj.section2;
    this.section3 = jsonObj.section3;
    this.section4 = jsonObj.section4;
    this.section5 = jsonObj.section5;
    return this;
  }
}
