import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import HttpService from './http.service';
import AuthModel from '../../models/auth.model';

@Injectable({ providedIn: 'root' })
export default class HeroService {
  private url = '/api/login';  // URL to web api
  constructor(private httpService: HttpService){

  }

  login (model: AuthModel) {
    const data = {
      userName: model.userName,
      userPwd: model.password,
      autoLogin: model.autoLogin
    };
    return this.httpService.request('POST' ,this.url, data)
      .pipe(
        map((res) => {
          return res;
        })
      );

    // .subscribe(res => {
    //   debugger;
    // });
  }

  private base64encode(str: string) {
      let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      let out: any, i: any, len: any;　　
      let c1: any, c2: any, c3: any;　　
      len = str.length;　　
      i = 0;　　
      out = "";　　
      while (i < len) {
          c1 = str.charCodeAt(i++) & 0xff;
          if (i == len) {　　
              out += base64EncodeChars.charAt(c1 >> 2);　　
              out += base64EncodeChars.charAt((c1 & 0x3) << 4);　　
              out += "==";　　
              break;
          }
          c2 = str.charCodeAt(i++);
          if (i == len) {　　
              out += base64EncodeChars.charAt(c1 >> 2);　　
              out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));　　
              out += base64EncodeChars.charAt((c2 & 0xF) << 2);　　
              out += "=";　　
              break;
          }
          c3 = str.charCodeAt(i++);
          out += base64EncodeChars.charAt(c1 >> 2);
          out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
          out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
          out += base64EncodeChars.charAt(c3 & 0x3F);　　
      }　　
      return out;
  }
}