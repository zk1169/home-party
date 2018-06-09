import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable, forkJoin } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { FormControl, Validators, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormComponent, RegExpValidator } from '@src/app/models/form-component';
import { EventBus } from '@src/app/shared';
import { StatusType } from '@src/app/models/enum';
import { StoreModel, CityModel } from '@src/app/models/store.model';
import { StoreService, CityService, StatusList } from '@src/app/shared';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'store-detail-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [StoreService, CityService]
})
export class StoreDetailComponent extends FormComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  saveStoreAsync: Observable<any>;
  cityList: Array<CityModel> = [];
  statusList: Array<any> = StatusList;
  
  constructor(eventBus: EventBus, 
    private storeService: StoreService, 
    private cityService: CityService, 
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super(eventBus);
    this.initFormGroup();
  }

  ngOnInit() {
    this.changePageTitle('门店编辑');
    const storeId = this.route.snapshot.paramMap.get('id');
    
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );

    // merge(this.cityService.getAll(),this.storeService.getById(storeId))
    //   .pipe(
    //     reduce((res1:any,res2:any)=>{
    //       const result = {
    //         cityList: null,
    //         storeModel: null
    //       };
    //       if (res1.dataList) {
    //         result.cityList = _.get(res1, 'dataList', []);
    //         result.storeModel = res2;
    //       } else {
    //         result.cityList = _.get(res2, 'dataList', []);
    //         result.storeModel = res1;
    //       }
    //       return result;
    //     })
    //   )
    //   .subscribe(
    //     (res)=>{
    //       console.log(res);
    //       if (res.storeModel) {
    //         res.storeModel.id = storeId;
    //       }
    //       this.cityList = res.cityList;
    //       this.initFormGroup(res.storeModel);
    //     },
    //     (err)=>{}
    //   );
    forkJoin([this.cityService.getAll(),this.storeService.getById(storeId)])
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
            res.storeModel.id = storeId;
          }
          this.cityList = res.cityList;
          this.initFormGroup(res.storeModel);
        },
        (err)=>{}
      );
  }

  initFormGroup(store?: StoreModel) {
    if (store) {
      this.formGroup = this.fb.group({
        id: new FormControl(store.id, [Validators.required]),
        name: new FormControl(store.name, [Validators.required]),
        city: new FormControl(store.city.id, [
          Validators.required,
          // Validators.pattern('valid'),
        ]),
        address: new FormControl(store.address),
        price: new FormControl(store.price),
        priceWorkday: new FormControl(store.priceWorkday),
        priceWeekend: new FormControl(store.priceWeekend),
        allPrice: new FormControl(store.allPrice),
        playItems: new FormControl(store.playItems),
        orderNumber: new FormControl(store.orderNumber, [RegExpValidator(/^[0-9]*$/)]),
        openTime: new FormControl(store.openTime),
        status: new FormControl(store.status, [Validators.required]),
        cover: new FormControl(store.cover),
        coverBig: new FormControl(store.coverBig),
        section1: new FormControl(store.section1),
        section2: new FormControl(store.section2),
        section3: new FormControl(store.section3)
      });
    } else {
      this.formGroup = this.fb.group({
        id: new FormControl(0, [Validators.required]),
        name: new FormControl('', [Validators.required]),
        city: new FormControl(null, [
          Validators.required,
          // Validators.pattern('valid'),
        ]),
        address: new FormControl(''),
        price: new FormControl(''),
        priceWorkday: new FormControl(''),
        priceWeekend: new FormControl(''),
        allPrice: new FormControl(''),
        playItems: new FormControl(''),
        orderNumber: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
        openTime: new FormControl(''),
        status: new FormControl(StatusType.ENABLE, [Validators.required]),
        cover: new FormControl(null),
        coverBig: new FormControl(null),
        section1: new FormControl([]),
        section2: new FormControl([]),
        section3: new FormControl([])
      });
    }
  }

  saveStore() {
    if (this.formGroup.invalid) {
      _.forEach(this.formGroup.controls, item => item.markAsTouched());
      this.warnAlert('门店信息输入有误');
      return;
    }
    const storeModel = new StoreModel().toModel(this.formGroup.value);
    this.startProgressBar();
    this.saveStoreAsync = this.storeService.save(storeModel)
      .pipe(
        map(res => {
          this.stopProgressBar();
          this.successAlert('保存成功');
        })
      );
  }
}
