import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable, merge } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { FormControl, Validators, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormComponent, RegExpValidator } from '@src/app/models/form-component';
import { EventBus } from '@src/app/shared';
import { EventType } from '@src/app/models/enum';
import { StoreModel, CityModel } from '@src/app/models/store.model';
import { StoreService, CityService } from '@src/app/shared';

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
  // storeModel: StoreModel;
  matcher = new MyErrorStateMatcher();
  saveStoreAsync: Observable<any>;
  imageList: Array<Object>;
  cityList: Array<CityModel> = [];
  
  constructor(eventBus: EventBus, private storeService: StoreService, private cityService: CityService, private fb: FormBuilder) {
    super(eventBus);
    // this.storeModel = new StoreModel();
    this.imageList = [];
    this.initFormGroup();
  }

  ngOnInit() {
    this.getStoreDetail();
    merge(this.cityService.getAll(),this.storeService.getList(1, 10))
      .pipe(
        // map((res)=>{
        //   debugger;
        // })
        reduce((res1:any,res2:any)=>{
          return {
            cityList: _.get(res1, 'dataList', []),
            storeModel: res2
          };
        })
      )
      .subscribe(
        (res)=>{
          console.log(res);
          this.cityList = res.cityList;
        },
        (err)=>{}
      );
  }

  initFormGroup(store?: StoreModel) {
    this.formGroup = this.fb.group({
      storeName: new FormControl('', [Validators.required]),
      city: new FormControl(1, [
        Validators.required,
        // Validators.pattern('valid'),
      ]),
      address: new FormControl(''),
      price: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
      priceWorkday: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
      priceWeekend: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
      allPrice: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
      playItems: new FormControl(''),
      orderNumber: new FormControl('', [RegExpValidator(/^[0-9]*$/)]),
      openTime: new FormControl(''),
    });
  }

  getStoreDetail() {
    // this.eventNotice(EventType.PROGRESS_BAR ,true);
    // this.storeService.getAll(ConfigType.NumberType)
    //   .subscribe(
    //     (res) => {
    //       this.configModel = res;
    //       this.eventNotice(EventType.PROGRESS_BAR ,false);
    //     },
    //     (err) => {
    //       this.eventNotice(EventType.PROGRESS_BAR ,false);
    //     }
    //   );
  }

  saveStore() {
    this.ngOnInit();
    if (this.formGroup.invalid) {
      this.formGroup.updateValueAndValidity();
      return;
    }
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.saveStoreAsync = this.storeService.save(this.imageList[0]['file'])
      .pipe(
        map(res => {
          debugger;
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        })
      );
  }
}
