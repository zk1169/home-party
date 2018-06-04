import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, Validators, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { FormComponent, RegExpValidator } from '@src/app/models/form-component';
import { EventBus } from '@src/app/shared';
import { EventType, ConfigType } from '@src/app/models/enum';
import { ConfigService } from '@src/app/shared';

@Component({
  selector: 'setting-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class SettingComponent extends FormComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  // storeNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  // cityNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  // partnerNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  // teamNumber = new FormControl('', [RegExpValidator(/[0-9]*/i)]);
  // configModel: any;
  // form: FormGroup;
  saveSettingAsync: Observable<any>;
  
  constructor(eventBus: EventBus, 
    private configService: ConfigService, 
    private fb: FormBuilder
  ) {
    super(eventBus);
    this.initFormGroup();
    // this.configModel = {};
    // this.form = this.fb.group({
    //   storeNumber: ['', RegExpValidator(/[0-9]*/i)],
    //   cityNumber: ['', RegExpValidator(/[0-9]*/i)],
    //   partnerNumber: ['', RegExpValidator(/[0-9]*/i)],
    //   teamNumber: ['', RegExpValidator(/[0-9]*/i)]
    // });
  }

  ngOnInit() {
    this.changePageTitle('设置');
    this.getAllConfig();
  }

  initFormGroup(config?) {
    if (config) {
      this.formGroup = this.fb.group({
        storeNumber: new FormControl(config.storeNumber, [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        cityNumber: new FormControl(config.cityNumber, [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        partnerNumber: new FormControl(config.partnerNumber, [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        teamNumber: new FormControl(config.teamNumber, [Validators.required, RegExpValidator(/^[0-9]*$/)]),
      });
    } else {
      this.formGroup = this.fb.group({
        storeNumber: new FormControl('', [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        cityNumber: new FormControl('', [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        partnerNumber: new FormControl('', [Validators.required, RegExpValidator(/^[0-9]*$/)]),
        teamNumber: new FormControl('', [Validators.required, RegExpValidator(/^[0-9]*$/)]),
      });
    }
  }

  getAllConfig() {
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.configService.getAll(ConfigType.NumberType)
      .subscribe(
        (res) => {
          // this.configModel = res;
          this.initFormGroup(res);
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        },
        (err) => {
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        }
      );
  }

  saveSetting() {
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.saveSettingAsync = this.configService.save(ConfigType.NumberType, this.formGroup.value)
      .pipe(
        map(res => {
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        })
      );
  }
}
