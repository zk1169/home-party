import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatSelectModule
  // MatPaginatorModule
} from '@angular/material';

// import { ZkButtonComponent } from './components/button-component';
// import { ZkCheckboxComponent } from './components/checkbox-component';
// import { ZkRadioComponent } from './components/radio-component';
// import { ZkSelectComponent } from './components/select-component';
import { ZkBusyDirective } from './directives/busy.directive';
// import DialogAlert from './dialogs/alert';
import { PaginatorComponent } from './components/paginator';
import { UploadImageComponent } from './components/upload-image';

import { StatusPipe } from './pipes/status.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    // MatPaginatorModule
  ],
  declarations: [
    // ZkButtonComponent,
    // ZkCheckboxComponent,
    // ZkRadioComponent,
    // ZkSelectComponent,
    ZkBusyDirective,
    PaginatorComponent,
    UploadImageComponent,
    StatusPipe,
    // DialogAlert,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    // MatPaginatorModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // ZkButtonComponent,
    // ZkCheckboxComponent,
    // ZkRadioComponent,
    // ZkSelectComponent,
    ZkBusyDirective,
    PaginatorComponent,
    UploadImageComponent,
    StatusPipe,
    // DialogAlert
  ],
})
export class SharedModule { }
