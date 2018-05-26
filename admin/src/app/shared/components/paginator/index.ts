import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel } from '@src/app/models/page-component.model';

@Component({
  selector: 'paginator',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class PaginatorComponent implements OnInit{
  // @Input ('page') page: number = 1;
  // @Input ('size') size: number = 10;
  // @Input ('total') total: number = 0;
  @Input ('options') pageModel: PageModel;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  get TotalPage():Array<number> {
    return this.pageModel.TotalPage;
  }
  ngOnInit() {

  }

  pageClick(clickPage) {
    if (this.pageModel.page === clickPage) {
      return;
    }
    this.pageModel.page = clickPage;
    this.pageChanged.emit(clickPage);
  }

  prevClick() {
    if (this.pageModel.page === 1) {
      return;
    }
    this.pageModel.preview();
    this.pageChanged.emit(this.pageModel.page);
  }

  nextClick() {
    if (this.pageModel.page === this.TotalPage.length) {
      return;
    }
    this.pageModel.next();
    this.pageChanged.emit(this.pageModel.page);
  }
}
