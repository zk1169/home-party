import { BaseModel } from './base.model';

export class ImageUploadModel {
  name: string;
  type: string;
  size: string;
  base64: string;
  file: File;
  url: string;


	constructor(jsonObj?){
    this.toModel(jsonObj);
  }

  get URL(){
    return `/${this.url}`;
  }
  
  toModel(jsonObj) {
    if (!jsonObj) {
      return;
    }
    this.name = jsonObj.name;
    this.type = jsonObj.type;
    this.size = jsonObj.size;
    this.base64 = jsonObj.base64;
    this.file = jsonObj.file;
    this.url = jsonObj.url;

    return this;
  }
}
