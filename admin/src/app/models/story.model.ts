import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { ImageUploadModel } from './image-upload.model';

export class StoryModel extends BaseModel {
  type: number;
	name: string;
	headerImg: ImageUploadModel;
  cover: ImageUploadModel;
  coverBig: ImageUploadModel;
  label: string;
  title: string;
  content: string;
  paragraph: string;

	constructor(){
		super();
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
    this.type = jsonObj.type;
    this.name = jsonObj.name;
    if (typeof(jsonObj.headerImg) === 'string') {
      this.headerImg = new ImageUploadModel({url: jsonObj.headerImg});
    } else {
      this.headerImg = jsonObj.headerImg;
    }
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
    this.label = jsonObj.label;
    this.title = jsonObj.title;
    this.content = jsonObj.content;
    this.paragraph = jsonObj.paragraph;
    return this;
  }

  toJson(): any {
    const jsonObj = super.toJson();
    jsonObj.type = this.type;
    jsonObj.name = this.name;
    jsonObj.headerImg = _.get(this, 'headerImg.url', '');
    jsonObj.cover = _.get(this, 'cover.url', '');
    jsonObj.coverBig = _.get(this, 'coverBig.url', '');
    jsonObj.title = this.title;
    jsonObj.label = this.label;
    jsonObj.paragraph = this.paragraph;
    jsonObj.content = this.content;
    return jsonObj;
  }
}
