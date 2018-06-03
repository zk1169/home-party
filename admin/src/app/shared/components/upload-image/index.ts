import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ImageUploadModel } from '@src/app/models/image-upload.model';

@Component({
  selector: 'upload-image',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class UploadImageComponent implements OnInit {

  @Input('image') image: any;//Array<Object> | Object | FormControl;
  @Input('max') max: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  get ImageList() {
    let imageList = [];
    const imageType = this.image.constructor.name;
    // console.log(imageType);
    switch(imageType) {
      case 'Object':
        if (this.image.value) {
          imageList.push(this.image.value);
        }
        break;
      case 'FormControl':
        if(this.image.value && this.image.value.constructor.name === 'Array') {
          imageList = this.image.value;
        } else {
          if (this.image.value) {
            imageList.push(this.image.value);
          }
        }
        break;
      case 'Array':
        imageList = this.image;
        break;
    }
    return imageList;
  }

  setImage(fileInfo) {
    const imageType = this.image.constructor.name;
    // console.log(imageType);
    switch(imageType) {
      case 'Object':
        this.image = fileInfo;
        break;
      case 'FormControl':
        if(this.image.value && this.image.value.constructor.name === 'Array') {
          this.image.value.push(fileInfo);
        } else {
          this.image.setValue(fileInfo);
        }
        break;
      case 'Array':
        this.image.push(fileInfo);
        break;
    }
  }

  ngOnInit() {
  }

  removeImage(index) {
    if(this.image.value && this.image.value.constructor.name === 'Array') {
      this.image.value.splice(index, 1);
    } else {
      this.image.setValue(null);
    }
  }

  imageFileChange(ev) {
    let files = ev.target.files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        if (file.size >= 1024 * 1024 * 5) {
          alert('上传的图片大小应在5MB以下');
          return;
        }
        let fileInfo = new ImageUploadModel({
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file
        });
        // debugger;
        // this.ImageList.push(fileInfo);
        this.setImage(fileInfo);
      } // reader.onload
    }
  }

}
