import { Injectable, Inject } from '@angular/core';
import { merge, of, forkJoin } from 'rxjs';
import { map, switchMap, reduce, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { BannerModel } from '@src/app/models/banner.model';


@Injectable()
export class BannerService {
  private url = '/api/banner';  // URL to web api
  constructor(private httpService: HttpService, private uploadFileService: UploadFileService){

  }

  save(banner: BannerModel) {
    return forkJoin(_.map(banner.images, item => this.uploadFileService.upload(item.file, item.url)))
      .pipe(
        map((res)=>{
          console.log(`1.${res}`);
          _.forEach(res, (item, index) => {
            if (item) {
              banner.images[index].url = item;
            }
          });
          return of(null);
        }),
        switchMap((res)=>{
          // console.log(`4.${res}`);
          const data = banner.toJson();
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
          banner.id = res.id;
          return banner;
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
          return new BannerModel().toModel(res);
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
            result.dataList.push(new BannerModel().toModel(item));
          });
          return result;
        })
      );
  }

}
