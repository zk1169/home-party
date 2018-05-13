import { Component, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
    selector: 'zk-checkbox',
    styleUrls: ['./index.scss'],
    template: `
      <div class="zk-checkbox" [class.checked]="checked">
        <label layout="row" layout-align="start center" (click)="labelClick()">
            <span>&nbsp;{{label}}</span>
        </label>
      </div>
      `,
})
export class ZkCheckboxComponent {
    @Input() checked:Boolean;
    @Input() label:String;
    @Output() checkedChange = new EventEmitter<Boolean>();

    constructor() {
    }

    labelClick(){
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        console.log(`checkbox.checked=${this.checked}`);
    }
}
