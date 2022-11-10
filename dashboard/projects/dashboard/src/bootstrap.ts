import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'zone.js';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

export const mount = () => {
  const el = platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
  console.log('el: ', el);
};
