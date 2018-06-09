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
  
  constructor(eventBus: EventBus, 
    private bannerService: BannerService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super(eventBus);
    this.initFormGroup();
  }

  ngOnInit() {
    this.changePageTitle('Banner编辑');
    const bannerId = this.route.snapshot.paramMap.get('id');
    this.bannerService.getById(bannerId)
      .pipe(
        map((res)=>{
          const result = {
            cityList: _.get(res, '[0].dataList'),
            storeModel: _.get(res, '[1]')
          };
          return result;
        })
      )
      .subscribe(
        (res)=>{
          // console.log(res);
          if (res.storeModel) {
            res.storeModel.id = bannerId;
          }
          this.initFormGroup(res.storeModel);
        },
        (err)=>{}
      );
  }

  initFormGroup(banner?: BannerModel) {
    if (banner) {
      this.formGroup = this.fb.group({
        id: new FormControl(banner.id, [Validators.required]),
        name: new FormControl(banner.name, [Validators.required]),
        images: new FormControl(banner.images)
      });
    } else {
      this.formGroup = this.fb.group({
        id: new FormControl(0, [Validators.required]),
        name: new FormControl('', [Validators.required]),
        images: new FormControl([])
      });
    }
  }

  save() {
    if (this.formGroup.invalid) {
      _.forEach(this.formGroup.controls, item => item.markAsTouched());
      this.warnAlert('门店信息输入有误');
      return;
    }
    const bannerModel = new BannerModel().toModel(this.formGroup.value);
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
