import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class CityModel extends BaseModel {
	name: string;

	constructor(id?){
    super();
    this.id = id;
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
  cover: ImageUploadModel;
  coverBig: ImageUploadModel;
  playItems: string;
  priceWorkday: string;
  priceWeekend: string;
  allPrice: string;
  orderNumber: string;
  openTime: string;
  section1: Array<ImageUploadModel>;
  section2: Array<ImageUploadModel>;
  section3: Array<ImageUploadModel>;
  section4: Array<ImageUploadModel>;
  section5: Array<ImageUploadModel>;
  city: CityModel;

	constructor(){
		super();
  }

  initSectionImages(field, images) {
    _.forEach(images, (item ,index)=>{
      if (item && typeof(item) === 'string') {
        if (this[field][index]) {
          this[field][index].url = item;
        } else {
          const imageUploda = new ImageUploadModel();
          imageUploda.url = item;
          this[field].push(imageUploda);
        }
      }
    });
  }
  
  toModel(jsonObj) {
    super.toModel(jsonObj);
    this.city = new CityModel(jsonObj.city);
    this.name = jsonObj.name;
    this.address = jsonObj.address;
    this.price = jsonObj.price;
    this.cover = jsonObj.cover;
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

  toJson(): any {
    const jsonObj = super.toJson();
    jsonObj.cityId = this.city.id;
    jsonObj.name = this.name;
    jsonObj.address = this.address;
    jsonObj.price = this.price;
    jsonObj.cover = _.get(this, 'cover.url', '');
    jsonObj.coverBig = _.get(this, 'coverBig.url', '');
    jsonObj.playItems = this.playItems;
    jsonObj.priceWorkday = this.priceWorkday;
    jsonObj.priceWeekend = this.priceWeekend;
    jsonObj.allPrice = this.allPrice;
    jsonObj.orderNumber = this.orderNumber;
    jsonObj.openTime = this.openTime;
    jsonObj.section1 = _.map(this.section1, item => item.url).join(',');
    jsonObj.section2 = _.map(this.section2, item => item.url).join(',');
    jsonObj.section3 = _.map(this.section3, item => item.url).join(',');
    jsonObj.section4 = _.map(this.section4, item => item.url).join(',');
    jsonObj.section5 = _.map(this.section5, item => item.url).join(',');
    return jsonObj;
  }
}
