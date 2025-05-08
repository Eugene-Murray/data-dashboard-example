import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppShellComponent } from './app/app-shell.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppShellComponent, appConfig)
  .catch(err => console.log(err));
