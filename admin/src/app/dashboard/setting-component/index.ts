import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { BaseComponent } from '@src/app/models/base-component.model';
import { EventBus } from '@src/app/shared';
import { EventType } from '@src/app/models/enum';

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
  jiamengdianNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  cityNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  jiamengshangNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  teamNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  
  constructor(eventBus: EventBus) {
    super(eventBus);
  }

  ngOnInit() {

  }


  getErrorMessage(formName) {
    // return this.jiamengdianNumber.hasError('required') ? 'You must enter a value' :
    //   this.jiamengdianNumber.hasError('email') ? 'Not a valid email' : '';
    return _.get(this, formName).hasError('forbiddenName') ? '请输入数字' : ''
  }
}
