import { Injectable, Inject } from '@angular/core';
import { merge, of } from 'rxjs';
import { map, switchMap, reduce, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { StoreModel, CityModel } from '@src/app/models/store.model';


@Injectable()
export class StoreService {
  private url = '/api/store';  // URL to web api
  constructor(private httpService: HttpService, private uploadFileService: UploadFileService){

  }

  save(storeModel: StoreModel) {
    return this.uploadFileService.upload(_.get(storeModel, 'cover.file'), _.get(storeModel, 'cover.url'))
      .pipe(
        switchMap((res)=>{
          // console.log(`1.${res}`);
          if (res) {
            storeModel.cover.url = res;
          }
          return this.uploadFileService.upload(_.get(storeModel, 'coverBig.file'), _.get(storeModel, 'coverBig.url'));
        }),
        switchMap((res)=>{
          // console.log(`2.${res}`);
          if (res) {
            storeModel.coverBig.url = res;
          }
          // const map = new Map();
          // _.forEach(storeModel.section1, item => {
          //   map.set(this.uploadFileService.upload(item.file));
          // });
          
          const section1Temp = storeModel.section1;
          storeModel.section1 = [];
          return merge(
            this.uploadFileService.upload(_.get(section1Temp, '[0].file'), _.get(section1Temp, '[0].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[1].file'), _.get(section1Temp, '[1].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[2].file'), _.get(section1Temp, '[2].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[3].file'), _.get(section1Temp, '[3].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[4].file'), _.get(section1Temp, '[4].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[5].file'), _.get(section1Temp, '[5].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[6].file'), _.get(section1Temp, '[6].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[7].file'), _.get(section1Temp, '[7].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[8].file'), _.get(section1Temp, '[8].url')),
            this.uploadFileService.upload(_.get(section1Temp, '[9].file'), _.get(section1Temp, '[9].url'))
          );
        }),
        reduce((...res)=>{
          storeModel.initSectionImages('section1', res);
          return of(null);
        }),
        switchMap((res)=>{
          const section2Temp = storeModel.section2;
          storeModel.section2 = [];
          return merge(
            this.uploadFileService.upload(_.get(section2Temp, '[0].file'), _.get(section2Temp, '[0].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[1].file'), _.get(section2Temp, '[1].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[2].file'), _.get(section2Temp, '[2].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[3].file'), _.get(section2Temp, '[3].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[4].file'), _.get(section2Temp, '[4].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[5].file'), _.get(section2Temp, '[5].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[6].file'), _.get(section2Temp, '[6].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[7].file'), _.get(section2Temp, '[7].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[8].file'), _.get(section2Temp, '[8].url')),
            this.uploadFileService.upload(_.get(section2Temp, '[9].file'), _.get(section2Temp, '[9].url'))
          );
        }),
        reduce((...res)=>{
          storeModel.initSectionImages('section2', res);
          return of(null);
        }),
        switchMap((res)=>{
          const section3Temp = storeModel.section3;
          storeModel.section3 = [];
          return merge(
            this.uploadFileService.upload(_.get(section3Temp, '[0].file'), _.get(section3Temp, '[0].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[1].file'), _.get(section3Temp, '[1].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[2].file'), _.get(section3Temp, '[2].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[3].file'), _.get(section3Temp, '[3].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[4].file'), _.get(section3Temp, '[4].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[5].file'), _.get(section3Temp, '[5].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[6].file'), _.get(section3Temp, '[6].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[7].file'), _.get(section3Temp, '[7].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[8].file'), _.get(section3Temp, '[8].url')),
            this.uploadFileService.upload(_.get(section3Temp, '[9].file'), _.get(section3Temp, '[9].url'))
          );
        }),
        reduce((...res)=>{
          storeModel.initSectionImages('section3', res);
          return of(null);
        }),
        switchMap((res)=>{
          console.log(`4.${res}`);
          const data = storeModel.toJson();
          let method = null;
          let _url = this.url;
          if (data.id) {
            method = 'PUT';
            _url += `/${data.id}`;
          } else {
            method = 'POST';
          }
          return this.httpService.request(method, _url, data);
        }),
        map((res)=>{
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

  getById (id) {
    if (!id) {
      return of(null);
    }
    return this.httpService.request('GET', `${this.url}/${id}`)
      .pipe(
        map((res) => {
          return new StoreModel().toModel(res);
        })
      );
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