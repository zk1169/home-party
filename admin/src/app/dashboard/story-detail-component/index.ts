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
import { StoryModel } from '@src/app/models/story.model';
import { StoryService, StatusList } from '@src/app/shared';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'story-detail-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [StoryService]
})
export class StoryDetailComponent extends FormComponent implements OnInit {
  // jiamengdianNumber = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  saveStoreAsync: Observable<any>;
  statusList: Array<any> = StatusList;
  
  constructor(eventBus: EventBus, 
    private storyService: StoryService, 
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    super(eventBus);
    this.initFormGroup();
  }

  ngOnInit() {
    this.changePageTitle('故事/新闻编辑');
    const storeId = this.route.snapshot.paramMap.get('id');
    
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );

    this.storyService.getById(storeId)
      .subscribe(
        (res)=>{
          this.initFormGroup(res);
        },
        (err)=>{}
      );
  }

  initFormGroup(story?: StoryModel) {
    if (story) {
      this.formGroup = this.fb.group({
        id: new FormControl(story.id, [Validators.required]),
        name: new FormControl(story.name, [Validators.required]),
        type: new FormControl(story.type, [
          Validators.required,
          // Validators.pattern('valid'),
        ]),
        label: new FormControl(story.label),
        title: new FormControl(story.title),
        content: new FormControl(story.content),
        paragraph: new FormControl(story.paragraph),
        status: new FormControl(story.status, [Validators.required]),
        headerImg: new FormControl(story.headerImg),
        cover: new FormControl(story.cover),
        coverBig: new FormControl(story.coverBig)
      });
    } else {
      this.formGroup = this.fb.group({
        id: new FormControl(0, [Validators.required]),
        name: new FormControl('', [Validators.required]),
        type: new FormControl(1, [
          Validators.required,
          // Validators.pattern('valid'),
        ]),
        label: new FormControl(''),
        title: new FormControl(''),
        content: new FormControl(''),
        paragraph: new FormControl(''),
        status: new FormControl(StatusType.ENABLE, [Validators.required]),
        headerImg: new FormControl(null),
        cover: new FormControl(null),
        coverBig: new FormControl(null)
      });
    }
  }

  saveStore() {
    if (this.formGroup.invalid) {
      _.forEach(this.formGroup.controls, item => item.markAsTouched());
      this.warnAlert('信息输入有误');
      return;
    }
    const storyModel = new StoryModel().toModel(this.formGroup.value);
    this.startProgressBar();
    this.saveStoreAsync = this.storyService.save(storyModel)
      .pipe(
        map(res => {
          this.stopProgressBar();
          this.successAlert('保存成功');
        })
      );
  }
}
