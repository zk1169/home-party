import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';

import { ZkButtonComponent } from './components/button-component';
import { ZkCheckboxComponent } from './components/checkbox-component';
import { ZkRadioComponent } from './components/radio-component';
import { ZkSelectComponent } from './components/select-component';
import { ZkBusyDirective } from './directives/busy.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule
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
    MatMenuModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ZkButtonComponent,
    ZkCheckboxComponent,
    ZkRadioComponent,
    ZkSelectComponent,
    ZkBusyDirective
  ],
})
export class SharedModule { }
