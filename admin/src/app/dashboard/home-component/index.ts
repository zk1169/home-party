import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CanComponentDeactivate } from '@src/app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-component',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class HomeComponent implements OnInit ,CanComponentDeactivate{

  ngOnInit() {
    
  }

  canDeactivate(): Observable<boolean> | boolean {
    return true;
    // return this.dialogService.confirm('Discard changes?');
  }
}
