import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule,MatInputModule } from '@angular/material';

import { ZkButtonComponent } from './components/button-component';
import { ZkCheckboxComponent } from './components/checkbox-component';
import { ZkRadioComponent } from './components/radio-component';
import { ZkSelectComponent } from './components/select-component';
import { ZkBusyDirective } from './directives/busy.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    ZkButtonComponent,
    ZkCheckboxComponent,
    ZkRadioComponent,
    ZkSelectComponent,
    ZkBusyDirective,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ZkButtonComponent,
    ZkCheckboxComponent,
    ZkRadioComponent,
    ZkSelectComponent,
    ZkBusyDirective,
  ],
})
export class SharedModule { }
