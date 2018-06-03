import { Injectable, Inject } from '@angular/core';
import { merge, from } from 'rxjs';
import { map, switchMap, reduce, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { StoreModel, CityModel } from '@src/app/models/store.model';
import { Observable, of } from 'rxjs';


@Injectable()
export class StoreService {
  private url = '/api/store';  // URL to web api
  constructor(private httpService: HttpService, private uploadFileService: UploadFileService){

  }

  save(storeModel: StoreModel) {
    return this.uploadFileService.upload(_.get(storeModel, 'cover.file'))
      .pipe(
        switchMap((res) => {
          // console.log(`1.${res}`);
          if (res) {
            storeModel.cover.url = res;
          }
          return this.uploadFileService.upload(_.get(storeModel, 'coverBig.file'));
        }),
        switchMap((res) => {
          // console.log(`2.${res}`);
          if (res) {
            storeModel.coverBig.url = res;
          }
          // const map = new Map();
          // _.forEach(storeModel.section1, item => {
          //   map.set(this.uploadFileService.upload(item.file));
          // });
          return merge(
            this.uploadFileService.upload(_.get(storeModel.section1, '[0].file')),
            this.uploadFileService.upload(_.get(storeModel.section1, '[1].file')),
            this.uploadFileService.upload(_.get(storeModel.section1, '[2].file'))
          );
        }),
        reduce((...res)=>{
          // console.log(`3.${res}`);
          storeModel.initSectionImages('section1', res);
          return of(null);
        }),
        switchMap((res) => {
          // console.log(`4.${res}`);
          const data = storeModel.toJson();
          return this.httpService.request('POST', this.url, data);
        }),
        map((res) => {
          // console.log(`5.${res}`);
          storeModel.id = res.id;
          return storeModel;
        }),
        catchError((err)=>{
          console.error(err);
          return err;
        })
      );
  }

  // save(fileData) {
  //   return this.uploadFileService.upload(fileData)
  //     .pipe(
  //       map((res) => {
  //         debugger;
  //         return res;
  //       })
  //     );
  // }

  getList (page, size=10) {
    const data = {
      page,
      size
    };
    return this.httpService.request('GET', this.url, data)
      .pipe(
        map((res) => {
          const result = {
            total: res.total,
            page: res.page,
            size: res.size,
            dataList: []
          };
          _.forEach(res.dataList, (item) => {
            result.dataList.push(new StoreModel().toModel(item));
          });
          return result;
        })
      );
  }

}

@Injectable()
export class CityService {
  private url = '/api/city';  // URL to web api
  constructor(private httpService: HttpService){

  }

  addNewCity (name) {
    const data = {name};
    return this.httpService.request('POST', this.url, data)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  offLineCity (cityId) {
    return this.httpService.request('DELETE', `${this.url}/${cityId}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  onLineCity (cityId) {
    return this.httpService.request('PUT', `${this.url}/${cityId}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getAll() {
    return this.getList(1, 1000);
  }

  getList (page, size=10) {
    const data = {
      page,
      size
    };
    return this.httpService.request('GET', this.url, data)
      .pipe(
        map((res) => {
          const result = {
            total: res.total,
            page: res.page,
            size: res.size,
            dataList: []
          };
          _.forEach(res.dataList, (item) => {
            result.dataList.push(new CityModel().toModel(item));
          });
          return result;
        })
      );
  }

}