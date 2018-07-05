import { Injectable, Inject } from '@angular/core';
import { merge, of, forkJoin } from 'rxjs';
import { map, switchMap, reduce, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import { UploadFileService } from './upload-file.service';
import { StoryModel } from '@src/app/models/story.model';


@Injectable()
export class StoryService {
  private url = '/api/story';  // URL to web api
  constructor(private httpService: HttpService, private uploadFileService: UploadFileService){

  }

  save(storyModel: StoryModel) {
    return this.uploadFileService.upload(_.get(storyModel, 'cover.file'), _.get(storyModel, 'cover.url'))
      .pipe(
        switchMap((res)=>{
          // console.log(`1.${res}`);
          if (res) {
            storyModel.cover.url = res;
          }
          return this.uploadFileService.upload(_.get(storyModel, 'coverBig.file'), _.get(storyModel, 'coverBig.url'));
        }),
        switchMap((res)=>{
          // console.log(`2.${res}`);
          if (res) {
            storyModel.coverBig.url = res;
          }
          return this.uploadFileService.upload(_.get(storyModel, 'headerImg.file'), _.get(storyModel, 'headerImg.url'));
        }),
        map((res)=>{
          if (res) {
            storyModel.headerImg.url = res;
          }
          return of(null);
        }),
        switchMap((res)=>{
          // console.log(`4.${res}`);
          const data = storyModel.toJson();
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
          storyModel.id = res.id;
          return storyModel;
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
          return new StoryModel().toModel(res);
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
            result.dataList.push(new StoryModel().toModel(item));
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
