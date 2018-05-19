import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';

// import { ComponentModule } from '../components/component.module';

import { SharedModule } from '@src/app/shared/shared.module';
import { SignComponent } from './sign-component';
import { LoginComponent } from './login-component';
import { SignRoutes } from './sign.routes';

@NgModule({
    imports: [
        // ComponentModule,
        SignRoutes,
        HttpModule,
        JsonpModule,
        SharedModule
    ],
    declarations: [
        SignComponent,
        LoginComponent,
    ]
})
export class SignModule {
    
 }
