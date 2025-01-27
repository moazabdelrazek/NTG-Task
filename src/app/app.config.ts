import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/**
 * libs
 */
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        ripple: true,
        theme: {
          preset: Aura,
          options: {
            darkModeSelector: false
          }
        }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
