import { BaseComponent } from './base-component.model';
import { EventBus } from '@src/app/shared';

export class PageModel {
  dataList: Array<Object>;
  total: number;
  size: number;
  page: number;

  constructor(dataList = [], total = 0, page = 1, size = 10) {
    this.init(dataList, total, page, size);
  }

  get TotalPage():Array<number> {
    const totalPage = Math.ceil(this.total / this.size);
    if (totalPage > 0) {
      const totalPageArray = [];
      for(let i=0;i<totalPage;i++) {
        totalPageArray.push(i+1);
      }
      return totalPageArray;
    }
    return [];
  }

  init(dataList = [], total = 0, page = 1, size = 10) {
    this.dataList = dataList;
    this.total = total;
    this.size = size;
    this.page = page;
  }

  preview() {
    this.page--;
  }
  next(){
    this.page++;
  }
}

export class PageComponent extends BaseComponent {
    pageModel: PageModel;
    constructor(eventBus : EventBus) {
      super(eventBus);
      this.pageModel = new PageModel();
    }

    initPageModel(options) {
      this.pageModel.init(options.dataList,options.total,options.page, options.size);
    }
  
}
