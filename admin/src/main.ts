import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app/app.module';
import { environment } from './environments/environment';

//全局样式
import './snap-zen/icon-symbol/symbol.scss';
import './snap-zen/icon-symbol/symbol.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
