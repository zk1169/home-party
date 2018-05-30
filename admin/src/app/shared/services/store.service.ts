import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { StoreModel } from '@src/app/models/store.model';


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