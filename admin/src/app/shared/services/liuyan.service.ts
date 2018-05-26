import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import AuthModel from '@src/app/models/auth.model';
import { LiuyanModel } from '@src/app/models/liuyan.model';


@Injectable({ providedIn: 'root' })
export class LiuyanService {
  private url = '/api/liuyan';  // URL to web api
  constructor(private httpService: HttpService){

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
            result.dataList.push(new LiuyanModel().toModel(item));
          });
          return result;
        })
      );
  }

}