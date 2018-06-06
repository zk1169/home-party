import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CityService } from '@src/app/shared';
import { PageComponent } from '@src/app/models/page-component.model';
import { EventBus } from '@src/app/shared';

@Component({
  selector: 'city-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [CityService]
})
export class CityComponent extends PageComponent implements OnInit{
  cityNameControl = new FormControl('', [Validators.required]);
  cityName: string;
  saveCityAsync: Observable<any>;

  constructor(private cityService:CityService, eventBus : EventBus) {
    super(eventBus);
  }
  ngOnInit() {
    this.changePageTitle('城市管理');
    this.getList(this.pageModel.page);
  }

  getList(page) {
    this.startProgressBar();
    this.cityService.getList(page, 20)
      .subscribe(
        (res) => {
          this.initPageModel(res);
          this.stopProgressBar();
        },
        (err) => {
          this.stopProgressBar();
          debugger;
        }
      );
  }

  pageChanged(page) {
    this.getList(page);
  }

  getErrorMessage() {
    return this.cityNameControl.hasError('required') ? '请输入城市名' : '';
  }

  addNewCity() {
    if (!this.cityName) {
      return;
    }
    this.startProgressBar();
    this.saveCityAsync = this.cityService.addNewCity(this.cityName)
      .pipe(
        map(res => {
          this.getList(1);
        })
      );
  }

  onOrOffLineCity(cityId, status){
    this.startProgressBar();
    if (status) {
      this.cityService.offLineCity(cityId)
        .subscribe(
          (res) => {
            this.getList(1);
          },
          (err) => {
            this.stopProgressBar();
          }
        );
    } else {
      this.cityService.onLineCity(cityId)
        .subscribe(
          (res) => {
            this.getList(1);
          },
          (err) => {
            this.stopProgressBar();
          }
        );
    }
  }
}
