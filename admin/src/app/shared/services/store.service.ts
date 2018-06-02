import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { StoreModel, CityModel } from '@src/app/models/store.model';


@Injectable()
export class StoreService {
  private url = '/api/store';  // URL to web api
  constructor(private httpService: HttpService, private uploadFileService: UploadFileService){

  }

  save(fileData) {
    return this.uploadFileService.upload(fileData)
      .pipe(
        map((res) => {
          debugger;
          return res;
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