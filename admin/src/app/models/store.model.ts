import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class CityModel extends BaseModel {
	name: string;

	constructor(options?){
    super();
    this.toModel(options);
  }
  
  toModel(jsonObj) {
    if (!jsonObj){
      return;
    }
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

  get CityName() {
    return _.get(this.city, 'name', '');
  }

  initSectionImages(field, images) {
    _.forEach(images, (item ,index)=>{
      if (item && typeof(item) === 'string') {
        // if (this[field][index]) {
        //   this[field][index].url = item;
        // } else {
        //   const imageUploda = new ImageUploadModel({url: item});
        //   this[field].push(imageUploda);
        // }
        const imageUploda = new ImageUploadModel({url: item});
        this[field].push(imageUploda);
      }
    });
  }
  
  toModel(jsonObj) {
    if (!jsonObj){
      return;
    }
    super.toModel(jsonObj);
    this.city = new CityModel({
      id:jsonObj.cityId||jsonObj.city,
      name:jsonObj.cityName
    });
    this.name = jsonObj.name;
    this.address = jsonObj.address;
    this.price = jsonObj.price;
    if (typeof(jsonObj.cover) === 'string') {
      this.cover = new ImageUploadModel({url: jsonObj.cover});
    } else {
      this.cover = jsonObj.cover;
    }
    if (typeof(jsonObj.coverBig) === 'string') {
      this.coverBig = new ImageUploadModel({url: jsonObj.coverBig});
    } else {
      this.coverBig = jsonObj.coverBig;
    }
    this.playItems = jsonObj.playItems;
    this.priceWorkday = jsonObj.priceWorkday;
    this.priceWeekend = jsonObj.priceWeekend;
    this.allPrice = jsonObj.allPrice;
    this.orderNumber = jsonObj.orderNumber;
    this.openTime = jsonObj.openTime;
    if (jsonObj.section1) {
      if (typeof(jsonObj.section1) === 'string') {
        const images1 = _.filter(jsonObj.section1.split(','), item => item);
        this.section1 = _.map(images1, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.section1 = jsonObj.section1 || [];
      }
    } else {
      this.section1 = [];
    }
    if (jsonObj.section2) {
      if (typeof(jsonObj.section2) === 'string') {
        const images2 = jsonObj.section2.split(',');
        this.section2 = _.map(images2, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.section2 = jsonObj.section2 || [];
      }
    } else {
      this.section2 = [];
    }
    if (jsonObj.section3) {
      if (typeof(jsonObj.section3) === 'string') {
        const images3 = jsonObj.section3.split(',');
        this.section3 = _.map(images3, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.section3 = jsonObj.section3 || [];
      }
    } else {
      this.section3 = [];
    }
    if (jsonObj.section4) {
      if (typeof(jsonObj.section4) === 'string') {
        const images4 = jsonObj.section4.split(',');
        this.section4 = _.map(images4, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.section4 = jsonObj.section4 || [];
      }
    } else {
      this.section4 = []; 
    }
    if (jsonObj.section5) {
      if (typeof(jsonObj.section5) === 'string') {
        const images5 = jsonObj.section5.split(',');
        this.section5 = _.map(images5, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.section5 = jsonObj.section5 || [];
      }
    } else {
      this.section5 = [];
    }
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
