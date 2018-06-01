import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { FormComponent, RegExpValidator } from '@src/app/models/form-component';
import { EventBus } from '@src/app/shared';
import { EventType } from '@src/app/models/enum';
import { StoreModel } from '@src/app/models/store.model';
import { StoreService } from '@src/app/shared';

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
  providers: [StoreService]
})
export class StoreDetailComponent extends FormComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  storeModel: StoreModel;
  matcher = new MyErrorStateMatcher();
  saveStoreAsync: Observable<any>;
  imageList: Array<Object>;
  
  constructor(eventBus: EventBus, private storeService: StoreService, private fb: FormBuilder) {
    super(eventBus);
    this.storeModel = new StoreModel();
    this.formGroup = this.fb.group({
      storeName: new FormControl('', [Validators.required, RegExpValidator(/[0-9]*/i)]),
      city: new FormControl('valid', [
        Validators.required,
        Validators.pattern('valid'),
      ])
    });
    this.imageList = [];
  }

  ngOnInit() {
    this.getStoreDetail();
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
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    debugger;
    this.saveStoreAsync = this.storeService.save(this.imageList[0]['file'])
      .pipe(
        map(res => {
          debugger;
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        })
      );
  }
}
