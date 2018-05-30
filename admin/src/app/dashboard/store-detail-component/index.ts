import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { BaseComponent } from '@src/app/models/base-component.model';
import { EventBus } from '@src/app/shared';
import { EventType, ConfigType } from '@src/app/models/enum';
import { StoreService } from '@src/app/shared';

const RegExpValidator = (nameRe: RegExp): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!control.value) {
      return null;
    }
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
};

@Component({
  selector: 'store-detail-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [StoreService]
})
export class StoreDetailComponent extends BaseComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  storeNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  cityNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  partnerNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  teamNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  configModel: object;
  form: FormGroup;

  saveStoreAsync: Observable<any>;

  imageList: Array<Object>;
  
  constructor(eventBus: EventBus, private storeService: StoreService, private fb: FormBuilder) {
    super(eventBus);
    this.configModel = {};
    this.form = this.fb.group({
      storeNumber: ['', RegExpValidator(/[0-9]*/i)],
      cityNumber: ['', RegExpValidator(/[0-9]*/i)],
      partnerNumber: ['', RegExpValidator(/[0-9]*/i)],
      teamNumber: ['', RegExpValidator(/[0-9]*/i)]
    });

    this.imageList = [];
  }

  ngOnInit() {
    this.getAllConfig();
  }

  getAllConfig() {
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

  getErrorMessage(formName) {
    // return this.jiamengdianNumber.hasError('required') ? 'You must enter a value' :
    //   this.jiamengdianNumber.hasError('email') ? 'Not a valid email' : '';
    return _.get(this.form, formName).hasError('forbiddenName') ? '请输入数字' : ''
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
