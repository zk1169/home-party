import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'zk-radio',
    // templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    template: `
      <div class="zk-radio">
        <div *ngFor="let item of list" class="radio" [class.checked]="item.checked">
            <label layout="row" layout-align="start center" (click)="labelClick(item)">
                <span>&nbsp;{{item.label}}</span>
            </label>
        </div>
      </div>
      `,
})
export class ZkRadioComponent {
    @Input() list: Array<{ checked: Boolean, label: String }>;

    constructor() {
    }

    labelClick(radio) {
        _.forEach(this.list, (item) => { 
            if(radio === item){
                radio.checked = !radio.checked;
            }else{
                item.checked = false;
            }
         });
        console.log(`radio.radio.checked=${radio.checked}`);
    }
}
