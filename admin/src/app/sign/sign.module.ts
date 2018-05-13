import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { MatButtonModule, MatCheckboxModule,MatInputModule } from '@angular/material';

// import { ComponentModule } from '../components/component.module';

import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './sign-component';
import { LoginComponent } from './login-component';
import { SignRoutes } from './sign.routes';

@NgModule({
    imports: [
        // ComponentModule,
        SignRoutes,
        HttpModule,
        JsonpModule,
        SharedModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatInputModule
    ],
    declarations: [
        SignComponent,
        LoginComponent,
    ]
})
export class SignModule {
    
 }
