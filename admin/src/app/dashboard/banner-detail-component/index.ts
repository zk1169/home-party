import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

import { FormComponent, RegExpValidator } from '@src/app/models/form-component';
import { EventBus } from '@src/app/shared';
import { BannerModel } from '@src/app/models/banner.model';
import { BannerService } from '@src/app/shared';

@Component({
  selector: 'banner-detail-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [BannerService]
})
export class BannerDetailComponent extends FormComponent implements OnInit {

  saveButtonAsync: Observable<any>;
  pageName: String;
  maxImage: Number;
  
  constructor(eventBus: EventBus, 
    private bannerService: BannerService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super(eventBus);
    this.initFormGroup();
  }

  ngOnInit() {
    this.changePageTitle('页面顶部图片编辑');
    const bannerId = this.route.snapshot.paramMap.get('id');
    this.bannerService.getById(bannerId)
      .subscribe(
        (res)=>{
          switch(res.name) {
            case 'home':
              this.pageName = '首页头部图';
              this.maxImage = 2;
              break;
            case 'introduce':
              this.pageName = '行业介绍页头部图';
              this.maxImage = 2;
              break;
            case 'brand':
              this.pageName = '品牌介绍页头部图';
              this.maxImage = 1;
              break;
            case 'store-list':
              this.pageName = '门店展示页头部图';
              this.maxImage = 1;
              break;
            case 'story-list':
              this.pageName = '故事页头部图';
              this.maxImage = 1;
              break;
            case 'jiameng':
              this.pageName = '加盟合作页头部图';
              this.maxImage = 1;
              break;
          }
          this.initFormGroup(res);
        },
        (err)=>{}
      );
  }

  initFormGroup(banner?: BannerModel) {
    if (banner) {
      this.formGroup = this.fb.group({
        id: new FormControl(banner.id, [Validators.required]),
        name: new FormControl({value:banner.name,disabled: true}, [Validators.required]),
        images: new FormControl(banner.images),
        mobileImages: new FormControl(banner.mobileImages)
      });
    } else {
      this.formGroup = this.fb.group({
        id: new FormControl(0, [Validators.required]),
        name: new FormControl({value:'',disabled: true}, [Validators.required]),
        images: new FormControl([]),
        mobileImages: new FormControl([])
      });
    }
  }

  save() {
    if (!this.formGroup.value.images || this.formGroup.value.images.length === 0) {
      _.forEach(this.formGroup.controls, item => item.markAsTouched());
      this.warnAlert('请至少选择一张图片');
      return;
    }
    const formValue = {
      id: this.formGroup.value.id,
      name: this.formGroup.controls.name.value,
      images: this.formGroup.value.images,
      mobileImages: this.formGroup.value.mobileImages
    };
    const bannerModel = new BannerModel().toModel(formValue);
    this.startProgressBar();
    this.saveButtonAsync = this.bannerService.save(bannerModel)
      .pipe(
        map(res => {
          this.stopProgressBar();
          this.successAlert('保存成功');
        })
      );
  }
}
