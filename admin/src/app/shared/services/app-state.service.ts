// Observable Version
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AppStateService {
    /**
     * 登陆状态
     * 有AuthGuard的路由切换前会检查登陆状态
     * true 正常切换路由
     * false 跳转到登陆页
     */
    isLoggedIn: boolean = true;
    
    /**
     * store the URL so we can redirect after logging in
     */
    redirectUrl: string;

    constructor() {
        this.cache = {};
    }


    /**
     * app的缓存
     */
    private cache:any;
    //---------------------------------
    //缓存机制
    //---------------------------------
    HTTP_CACHE_GET_IP:string = 'HTTP_CACHE_GET_IP';
    HTTP_CACHE_GET_ALL_PAY_ITEM:string = 'HTTP_CACHE_GET_ALL_PAY_ITEM_{0}';
    HTTP_CACHE_GET_ALL_ITEM:string = 'HTTP_CACHE_GET_ALL_ITEM_{0}_{1}_{2}';
    HTTP_CACHE_GET_MEMBER_RECHARGE_CARD:string = 'HTTP_CACHE_GET_MEMBER_RECHARGE_CARD_{0}';
    HTTP_CACHE_GET_ALL_ITEM_TYPE:string = 'HTTP_CACHE_GET_ALL_ITEM_TYPE';
    HTTP_CACHE_GET_ALL_TREE_MODEL_ITEM:string = 'HTTP_CACHE_GET_ALL_TREE_MODEL_ITEM_{0}';
    HTTP_CACHE_SEARCH_MEMBER_FIRST:string = 'HTTP_CACHE_SEARCH_MEMBER_FIRST';
    HTTP_CACHE_SEARCH_EMPLOYEE_FIRST:string = 'HTTP_CACHE_SEARCH_EMPLOYEE_FIRST';
    HTTP_CACHE_GET_ROOM_LIST:string = 'HTTP_CACHE_GET_ROOM_LIST_{0}';
    HTTP_CACHE_GET_ALL_SERVICE_ITEM_CATEGORY:string = 'HTTP_CACHE_GET_ALL_SERVICE_ITEM_CATEGORY';
    HTTP_CACHE_GET_ALL_SALES_TEMPLATE:string = 'HTTP_CACHE_GET_ALL_SALES_TEMPLATE';

    getCache(key:string){
        if(key && this.cache[key]){
            return this.cache[key].cacheValue;
        }else{
            return null;
        }
    }
    setCache(key:string,value:any){
        if(key){
            //this.cache[key] = value;
            this.cache[key] = new MwCache(key,value);
        }
    }
    clearAllCache(){
        this.cache = {};
    }
    clearCacheByKey(key:string){
        delete this.cache[key];
    }

}

class MwCache{
    /**
     * 首次写入缓存的时间
     */
    private timespan:number;
    
    private value:any;
    private key:string;

    /**
     * 缓存失效时间 10分钟
     */
    static timeout:number = 1000*60*10;

    constructor(key:string,value:any){
        this.timespan = Date.now();
        this.key = key;
        this.value = value;
    }
    get cacheValue(){
        let currentTimespan = Date.now();
        console.log(this.key + ' from cache time :'+(currentTimespan - this.timespan)/1000+'s');
        if(currentTimespan - this.timespan < MwCache.timeout){
            return this.value;
        }else{
            return null;
        }
    }
}
