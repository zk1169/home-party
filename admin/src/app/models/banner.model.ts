import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class BannerModel extends BaseModel {
	name: string;
  images: Array<ImageUploadModel>;
  mobileImages: Array<ImageUploadModel>;

  get maxImage(){
    let max = 1;
    switch(this.name) {
      case 'home':
      case 'introduce':
        max = 2;
        break;
      case 'brand':
      case 'store-list':
      case 'story-list':
      case 'jiameng':
        max = 1;
        break;
    }
    return max;
  }
  get pageName() {
    let pName = null;
    switch(this.name) {
      case 'home':
        pName = '首页头部图';
        break;
      case 'introduce':
        pName = '行业介绍页头部图';
        break;
      case 'brand':
        pName = '品牌介绍页头部图';
        break;
      case 'store-list':
        pName = '门店展示页头部图';
        break;
      case 'story-list':
        pName = '故事页头部图';
        break;
      case 'jiameng':
        pName = '加盟合作页头部图';
        break;
    }
    return pName;
  }

	constructor(){
		super();
  }
  
  toModel(jsonObj) {
    if (!jsonObj){
      return;
    }
    super.toModel(jsonObj);
    this.name = jsonObj.name;
    if (jsonObj.images) {
      if (typeof(jsonObj.images) === 'string') {
        const images1 = _.filter(jsonObj.images.split(','), item => item);
        this.images = _.map(images1, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.images = jsonObj.images || [];
      }
    } else {
      this.images = [];
    }

    if (jsonObj.mobileImages) {
      if (typeof(jsonObj.mobileImages) === 'string') {
        const images1 = _.filter(jsonObj.mobileImages.split(','), item => item);
        this.mobileImages = _.map(images1, item => new ImageUploadModel().toModel({url:item}));
      } else {
        this.mobileImages = jsonObj.mobileImages || [];
      }
    } else {
      this.mobileImages = [];
    }
    return this;
  }

  toJson(): any {
    const jsonObj = super.toJson();
    jsonObj.name = this.name;
    jsonObj.images = _.map(this.images, item => item.url).join(',');
    jsonObj.mobileImages = _.map(this.mobileImages, item => item.url).join(',');
    return jsonObj;
  }
}
