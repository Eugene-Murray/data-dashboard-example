import { provideHttpClient } from "@angular/common/http";
import { APP_ID, ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { environment } from "src/environments/environment";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideStore } from "@ngrx/store";
import * as fromStore from './store/index';
import { provideEffects } from "@ngrx/effects";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from "ngx-toastr";
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/Lara';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideToastr(), 
    providePrimeNG({
      theme: {
          preset: Lara
      }
    }),
    provideHttpClient(),
    { provide: APP_ID, useValue: 'wtw-fs-test' },
    provideRouter(appRoutes),
    provideStore({
      policyState: fromStore.policyReducer,
      policyTypeDetailsState: fromStore.policyTypeDetailReducer,
      policyHoldersState: fromStore.policyHolderReducer,
    },{
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    provideEffects([
      fromStore.PolicyEffects,
      fromStore.PolicyHoldersEffects,
      fromStore.PolicyTypeDetailsEffects
    ]),
    !environment.production ? provideStoreDevtools() : [],
  ]
};
