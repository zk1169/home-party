import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoryService } from '@src/app/shared';
import { PageComponent } from '@src/app/models/page-component.model';
import { EventBus } from '@src/app/shared';

@Component({
  selector: 'story-list-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  providers: [StoryService]
})
export class StoryListComponent extends PageComponent implements OnInit{
  constructor(private storyService:StoryService, eventBus : EventBus) {
    super(eventBus);
  }
  ngOnInit() {
    this.changePageTitle('故事/新闻管理');
    this.getList(this.pageModel.page);
  }

  getList(page) {
    this.startProgressBar();
    this.storyService.getList(page)
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

  onOrOffLine(storeId, status){
    this.startProgressBar();
    if (status) {
      this.storyService.offLine(storeId)
        .subscribe(
          (res) => {
            this.getList(this.pageModel.page);
          },
          (err) => {
            this.stopProgressBar();
          }
        );
    } else {
      this.storyService.onLine(storeId)
        .subscribe(
          (res) => {
            this.getList(this.pageModel.page);
          },
          (err) => {
            this.stopProgressBar();
          }
        );
    }
  }
}
