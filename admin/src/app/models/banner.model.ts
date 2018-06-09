import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class BannerModel extends BaseModel {
	name: string;
  images: Array<ImageUploadModel>;

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
    return this;
  }

  toJson(): any {
    const jsonObj = super.toJson();
    jsonObj.name = this.name;
    jsonObj.images = _.map(this.images, item => item.url).join(',');
    return jsonObj;
  }
}
