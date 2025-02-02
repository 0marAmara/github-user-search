import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {usersReducers} from '@app/features/search/state/users.reducers';
import { provideEffects } from '@ngrx/effects';
import {SearchEffects} from '@app/features/search/state/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideStore({
        response: usersReducers
    }),
    provideEffects([
      SearchEffects
    ])
]
};
