import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upload-image',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class UploadImageComponent implements OnInit {
  // @Input ('page') page: number = 1;
  // @Input ('size') size: number = 10;
  // @Input ('total') total: number = 0;
  @Input('imageList') imageList: Array<Object>;
  @Input('max') max: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }

  removeImage(index) {
    console.log(index);
    this.imageList.splice(index, 1);
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
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file
        };
        this.imageList.push(fileInfo);
      } // reader.onload
    }
  }
}
