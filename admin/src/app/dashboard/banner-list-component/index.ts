import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BannerService } from '@src/app/shared';
import { PageComponent } from '@src/app/models/page-component.model';
import { EventBus } from '@src/app/shared';

@Component({
  selector: 'banner-list-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [BannerService]
})
export class BannerListComponent extends PageComponent implements OnInit{
  constructor(private bannerService:BannerService, eventBus : EventBus) {
    super(eventBus);
  }
  ngOnInit() {
    this.changePageTitle('Banner管理');
    this.getList(this.pageModel.page);
  }

  getList(page) {
    this.startProgressBar();
    this.bannerService.getList(page)
      .subscribe(
        (res) => {
          this.initPageModel(res);
          this.stopProgressBar();
        },
        (err) => {
          this.stopProgressBar();
          debugger;
        }
      );
  }

  pageChanged(page) {
    this.getList(page);
  }

}
