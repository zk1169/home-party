import { Injectable, Inject } from '@angular/core';
import { merge, of, forkJoin } from 'rxjs';
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
          if (storeModel.section1 && storeModel.section1.length > 0) {
            return forkJoin(_.map(storeModel.section1, item => this.uploadFileService.upload(item.file, item.url)));
          } else {
            return of(null);
          }
        }),
        map((res)=>{
          console.log(`1.${res}`);
          _.forEach(res, (item, index) => {
            if (item) {
              storeModel.section1[index].url = item;
            }
          });
          return of(null);
        }),
        switchMap((res)=>{
          if (storeModel.section2 && storeModel.section2.length > 0) {
            return forkJoin(_.map(storeModel.section2, item => this.uploadFileService.upload(item.file, item.url)));
          } else {
            return of(null);
          }
        }),
        map((res)=>{
          _.forEach(res, (item, index) => {
            if (item) {
              storeModel.section2[index].url = item;
            }
          });
          return of(null);
        }),
        switchMap((res)=>{
          if (storeModel.section3 && storeModel.section3.length > 0) {
            return forkJoin(_.map(storeModel.section3, item => this.uploadFileService.upload(item.file, item.url)));
          } else {
            return of(null);
          }
        }),
        map((res)=>{
          _.forEach(res, (item, index) => {
            if (item) {
              storeModel.section3[index].url = item;
            }
          });
          return of(null);
        }),
        switchMap((res)=>{
          // console.log(`4.${res}`);
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

  offLine (storeId) {
    return this.httpService.request('DELETE', `${this.url}/status/${storeId}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  onLine (storeId) {
    return this.httpService.request('PUT', `${this.url}/status/${storeId}`)
      .pipe(
        map((res) => {
          return res;
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