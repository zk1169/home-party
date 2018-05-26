import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  // MatPaginatorModule
} from '@angular/material';

// import { ZkButtonComponent } from './components/button-component';
// import { ZkCheckboxComponent } from './components/checkbox-component';
// import { ZkRadioComponent } from './components/radio-component';
// import { ZkSelectComponent } from './components/select-component';
import { ZkBusyDirective } from './directives/busy.directive';
// import DialogAlert from './dialogs/alert';
import { PaginatorComponent } from './components/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    // MatPaginatorModule
  ],
  declarations: [
    // ZkButtonComponent,
    // ZkCheckboxComponent,
    // ZkRadioComponent,
    // ZkSelectComponent,
    ZkBusyDirective,
    PaginatorComponent,
    // DialogAlert,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    // MatPaginatorModule,
    CommonModule,
    FormsModule,
    // HttpClientModule,
    // ZkButtonComponent,
    // ZkCheckboxComponent,
    // ZkRadioComponent,
    // ZkSelectComponent,
    ZkBusyDirective,
    PaginatorComponent,
    // DialogAlert
  ],
})
export class SharedModule { }
