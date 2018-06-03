import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpService } from './http.service';


@Injectable({ providedIn: 'root' })
export class UploadFileService {
  private url = '/api/upload';  // URL to web api
  constructor(private httpService: HttpService){

  }

  upload (fileData) {
    if (!fileData) {
      return of(null);
    }
    let formData = new FormData();
    formData.append('file', fileData);
    return this.httpService.request('POST', this.url, formData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}