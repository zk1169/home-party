import * as _ from 'lodash';
import { EventBus } from '@src/app/shared';
import { BaseComponent } from './base-component';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';

export class FormComponent extends BaseComponent{
    formGroup: FormGroup;

    constructor(eventBus : EventBus) {
        super(eventBus);
    }

    getErrorMessage(type, formName) {
      // return this.jiamengdianNumber.hasError('required') ? 'You must enter a value' :
      //   this.jiamengdianNumber.hasError('email') ? 'Not a valid email' : '';
      // return _.get(this.formGroup.controls, formName).hasError('forbiddenName') ? '请输入数字' : '';
      let errorMessage = '';
      switch(type) {
        case 'required':
          errorMessage = `${formName} 是必选项`;
          break;
        case 'regexp':
          errorMessage = `请输入正确的${formName}`;
          break;
      }
      return errorMessage;
    }
}

const RegExpValidator = (nameRe: RegExp): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!control.value) {
      return null;
    }
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {'regexp': {value: control.value}};
  };
};
export { RegExpValidator };
