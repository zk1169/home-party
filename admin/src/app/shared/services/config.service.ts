import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';
import AuthModel from '@src/app/models/auth.model';
import { LiuyanModel } from '@src/app/models/liuyan.model';


@Injectable({ providedIn: 'root' })
export class ConfigService {
  private url = '/api/config';  // URL to web api
  constructor(private httpService: HttpService){

  }

  getAll (type) {
    return this.httpService.request('GET', `${this.url}/type`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  save (type, model) {
    return this.httpService.request('PUT', `${this.url}/type`, model)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}