import * as _ from 'lodash';
import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/timeout'
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, timeout, retry } from 'rxjs/operators';
// import AppStateService from './app-state.service';

const defaultHttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private http: HttpClient) { }

    /**
     * 直接请求api，不检查缓存
     * @param method 请求类型:get,post,put,delete...
     * @param url 请求的api地址
     * @param data 请求参数(可以为空)
     */
    request(method: string, url: string, data?: any) {
        // // if(data && this.appStateService.empInfo){
        // //     data.operatorId = this.appStateService.empInfo.id;
        // //     data.operatorName = this.appStateService.empInfo.name;
        // //     data.merchantId = this.appStateService.empInfo.merchant.id;
        // // }

        let options = null;
        if (_.toUpper(method) === 'GET'){
            url += `?ts=${new Date().getTime()}`;
            _.forIn(data, (value, key) => {
                url += `&${key}=${value}`;
            });
            // url = url.substr(0, url.length-1);
            options = defaultHttpOptions;
        } else if (data.constructor && data.constructor.name == "FormData") {
            options = { body: data };
        }
        else {
            options = _.assign(defaultHttpOptions, { body: data });
        }
        return this.http.request(method, url, options)
            .pipe(
                timeout(30000),
                retry(1), // retry a failed request up to 1 times
                // tap(res => console.log(`fetched heroes`)),
                map((res:any) => {
                    return res.data;
                }),
                catchError(this.handleError) // then handle the error
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

    // /**
    //  * 先检查缓存，如果缓存有，从缓存读取数据，否则请求api
    //  * @param url 请求的api地址
    //  * @param method 请求类型:get,post,put,delete...
    //  * @param data 请求参数(可以为空)
    //  * @param cacheKey 缓存key
    //  */
    // requestCache(url: string, method: string, data: any,cacheKey:string){
    //     let cacheValue = this.appStateService.getCache(cacheKey);
    //     if(cacheValue){
    //         return Observable.of(cacheValue);
    //     }else{
    //         return this.request(url,method,data)
    //             .map((res) => {
    //                 this.appStateService.setCache(cacheKey,res);
    //                 return res;
    //             })
    //             .catch((error: any) => {
    //                 return Observable.throw(error);
    //             });
    //     }
    // }

    // /**
    //  * 处理http返回数据
    //  * @param res http返回的数据
    //  */
    // private extractData(res: Response) {
    //     if(!res){
    //         return '';
    //     }
    //     let body:any;
    //     try{
    //         body = res.json();
    //     }catch(e){
    //         return '';
    //     }
    //     if (body && body.code == "000000") {
    //         return body.data || {};
    //     }else if(body && body.ip){
    //         return body.ip;
    //     }else {
    //         if (body && body.message) {
    //             throw { status: body.code, message: body.message };
    //         } else {
    //             throw { status: "500", message: "未知错误" };
    //         }
    //     }
    // }

}
