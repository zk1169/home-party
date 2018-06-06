import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LiuyanService } from '@src/app/shared';
import { PageComponent } from '@src/app/models/page-component.model';
import { EventBus } from '@src/app/shared';

@Component({
  selector: 'liuyan-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [LiuyanService]
})
export class LiuyanComponent extends PageComponent implements OnInit{
  constructor(private liuyanService:LiuyanService, eventBus : EventBus) {
    super(eventBus);
  }
  ngOnInit() {
    this.changePageTitle('留言管理');
    this.getList(this.pageModel.page);
  }

  getList(page) {
    this.startProgressBar();
    this.liuyanService.getList(page)
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
