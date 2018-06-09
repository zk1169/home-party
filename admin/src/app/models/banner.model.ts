import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class BannerModel extends BaseModel {
	name: string;
  images: Array<ImageUploadModel>;
  mobileImages: Array<ImageUploadModel>;

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
