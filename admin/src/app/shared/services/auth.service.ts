import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import HttpService from './http.service';

@Injectable({ providedIn: 'root' })
export default class HeroService {
  private url = '/api/liuyan';  // URL to web api
  constructor(private httpService: HttpService){

  }

  login () {
    return this.httpService.request('GET' ,this.url)
      .pipe(
        map((res) => {
          debugger;
          return res;
        })
      );
  }
}