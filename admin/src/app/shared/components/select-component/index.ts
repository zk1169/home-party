import { Component, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
    selector: 'zk-select',
    styleUrls: ['./index.scss'],
    templateUrl: './index.html',
})
export class ZkSelectComponent {
    @Input() selected:any;
    @Input() source:Array<Object>;
    @Input() displayField: String = 'label';
    @Output() selectChange = new EventEmitter<Boolean>();

    private showSource: Boolean = false;

    constructor() {
    }
}
