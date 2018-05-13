import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoComponent implements OnInit {

  private source: Array<Object>;
  private selected: any;
  constructor() { 
    this.source = [
      {label: 'select1', code: '0'},
      {label: 'select2', code: '1'},
      {label: 'select3', code: '2'},
      {label: 'select4', code: '3'},
      {label: 'select5', code: '4'},
      {label: 'select6', code: '5'},
      {label: 'select7', code: '6'},
      {label: 'select8', code: '7'},
    ];
    this.selected = '0';
  }

  ngOnInit() {
  }
}
