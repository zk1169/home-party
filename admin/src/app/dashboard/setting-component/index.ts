import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { BaseComponent } from '@src/app/models/base-component';
import { EventBus } from '@src/app/shared';
import { EventType, ConfigType } from '@src/app/models/enum';
import { ConfigService } from '@src/app/shared';

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
  selector: 'setting-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class SettingComponent extends BaseComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  storeNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  cityNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  partnerNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  teamNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  configModel: any;
  form: FormGroup;
  saveSettingAsync: Observable<any>;
  
  constructor(eventBus: EventBus, private configService: ConfigService, private fb: FormBuilder) {
    super(eventBus);
    this.configModel = {};
    this.form = this.fb.group({
      storeNumber: ['', RegExpValidator(/[0-9]*/i)],
      cityNumber: ['', RegExpValidator(/[0-9]*/i)],
      partnerNumber: ['', RegExpValidator(/[0-9]*/i)],
      teamNumber: ['', RegExpValidator(/[0-9]*/i)]
    });
  }

  ngOnInit() {
    this.getAllConfig();
  }

  getAllConfig() {
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.configService.getAll(ConfigType.NumberType)
      .subscribe(
        (res) => {
          this.configModel = res;
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        },
        (err) => {
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        }
      );
  }

  getErrorMessage(formName) {
    // return this.jiamengdianNumber.hasError('required') ? 'You must enter a value' :
    //   this.jiamengdianNumber.hasError('email') ? 'Not a valid email' : '';
    return _.get(this.form, formName).hasError('forbiddenName') ? '请输入数字' : ''
  }

  saveSetting() {
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.saveSettingAsync = this.configService.save(ConfigType.NumberType, this.configModel)
      .pipe(
        map(res => {
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        })
      );
  }
}
