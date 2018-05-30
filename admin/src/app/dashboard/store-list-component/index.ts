import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreService } from '@src/app/shared';
import { PageComponent } from '@src/app/models/page-component.model';
import { EventBus } from '@src/app/shared';
import { EventType } from '@src/app/models/enum';

@Component({
  selector: 'store-list-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [StoreService]
})
export class StoreListComponent extends PageComponent implements OnInit{
  constructor(private liuyanService:StoreService, eventBus : EventBus) {
    super(eventBus);
  }
  ngOnInit() {
    this.getList(this.pageModel.page);
  }

  getList(page) {
    this.eventNotice(EventType.PROGRESS_BAR ,true);
    this.liuyanService.getList(page)
      .subscribe(
        (res) => {
          this.initPageModel(res);
          this.eventNotice(EventType.PROGRESS_BAR ,false);
        },
        (err) => {
          this.eventNotice(EventType.PROGRESS_BAR ,false);
          debugger;
        }
      );
  }

  pageChanged(page) {
    this.getList(page);
  }
}
