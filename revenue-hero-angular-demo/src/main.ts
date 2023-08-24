import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


loadRevenueHeroScript();

function loadRevenueHeroScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.src = "https://app.revenuehero.io/scheduler.min.js";
  document.head.appendChild(script);
}
