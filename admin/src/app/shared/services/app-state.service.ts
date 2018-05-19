// Observable Version
import { Injectable } from '@angular/core';
import AuthModel from '../../models/auth.model';
// var config = require('../../../../../api/config/config.json');
import config from '../../../../config/config';


@Injectable({ providedIn: 'root' })
export default class AppStateService {
    /**
     * 登录的用户
     */
    authModel : AuthModel;
    
    /**
     * store the URL so we can redirect after logging in
     */
    redirectUrl: string;

    private cookieName1:string = config.cookieLoginName;
    private cookieName2:string = config.cookieAdminNameField;

    constructor() {
        this.authModel = null;
        // this.cache = {};
    }

    /**
     * 登陆状态
     * 有AuthGuard的路由切换前会检查登陆状态
     * true 正常切换路由
     * false 跳转到登陆页
     */
    get isLoggedIn() {
        const cookie1 = this.getCookie(this.cookieName1);
        if (cookie1) {
            this.authModel = new AuthModel();
            this.authModel.userName = this.getCookie(this.cookieName2);
            return true;
        }
        return !(this.authModel === null);
    }

    getCookie(name){ 
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]); 
        else 
            return null; 
    }

    logout() {
        this.authModel = null;
        // this.delCookie(this.cookieName1);
        // this.delCookie(this.cookieName2);
    }

    // private delCookie(name)  
    // {  
    //     let exp = new Date();
    //     exp.setTime(exp.getTime() - 1);
    //     var cval=this.getCookie(name);
    //     if(cval!=null) {
    //         document.cookie= name + "="+cval+";expires="+exp.toUTCString(); 
    //     }
    // }


    // /**
    //  * app的缓存
    //  */
    // private cache:any;
    // //---------------------------------
    // //缓存机制
    // //---------------------------------
    // HTTP_CACHE_GET_IP:string = 'HTTP_CACHE_GET_IP';
    // HTTP_CACHE_GET_ALL_PAY_ITEM:string = 'HTTP_CACHE_GET_ALL_PAY_ITEM_{0}';
    // HTTP_CACHE_GET_ALL_ITEM:string = 'HTTP_CACHE_GET_ALL_ITEM_{0}_{1}_{2}';
    // HTTP_CACHE_GET_MEMBER_RECHARGE_CARD:string = 'HTTP_CACHE_GET_MEMBER_RECHARGE_CARD_{0}';
    // HTTP_CACHE_GET_ALL_ITEM_TYPE:string = 'HTTP_CACHE_GET_ALL_ITEM_TYPE';
    // HTTP_CACHE_GET_ALL_TREE_MODEL_ITEM:string = 'HTTP_CACHE_GET_ALL_TREE_MODEL_ITEM_{0}';
    // HTTP_CACHE_SEARCH_MEMBER_FIRST:string = 'HTTP_CACHE_SEARCH_MEMBER_FIRST';
    // HTTP_CACHE_SEARCH_EMPLOYEE_FIRST:string = 'HTTP_CACHE_SEARCH_EMPLOYEE_FIRST';
    // HTTP_CACHE_GET_ROOM_LIST:string = 'HTTP_CACHE_GET_ROOM_LIST_{0}';
    // HTTP_CACHE_GET_ALL_SERVICE_ITEM_CATEGORY:string = 'HTTP_CACHE_GET_ALL_SERVICE_ITEM_CATEGORY';
    // HTTP_CACHE_GET_ALL_SALES_TEMPLATE:string = 'HTTP_CACHE_GET_ALL_SALES_TEMPLATE';

    // getCache(key:string){
    //     if(key && this.cache[key]){
    //         return this.cache[key].cacheValue;
    //     }else{
    //         return null;
    //     }
    // }
    // setCache(key:string,value:any){
    //     if(key){
    //         //this.cache[key] = value;
    //         this.cache[key] = new MwCache(key,value);
    //     }
    // }
    // clearAllCache(){
    //     this.cache = {};
    // }
    // clearCacheByKey(key:string){
    //     delete this.cache[key];
    // }

}

// class MwCache{
//     /**
//      * 首次写入缓存的时间
//      */
//     private timespan:number;
    
//     private value:any;
//     private key:string;

//     /**
//      * 缓存失效时间 10分钟
//      */
//     static timeout:number = 1000*60*10;

//     constructor(key:string,value:any){
//         this.timespan = Date.now();
//         this.key = key;
//         this.value = value;
//     }
//     get cacheValue(){
//         let currentTimespan = Date.now();
//         console.log(this.key + ' from cache time :'+(currentTimespan - this.timespan)/1000+'s');
//         if(currentTimespan - this.timespan < MwCache.timeout){
//             return this.value;
//         }else{
//             return null;
//         }
//     }
// }
