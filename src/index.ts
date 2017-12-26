import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoAppModule } from './app.module';

export * from './app.module';
export * from './app.component';
export * from './app.service';

platformBrowserDynamic()
  .bootstrapModule(DemoAppModule)
  .catch((err: any) => console.error(err));