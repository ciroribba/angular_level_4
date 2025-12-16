import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es-ES');
registerLocaleData(localeFr, 'fr-FR');
registerLocaleData(localeEn, 'en-US');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ]
};
