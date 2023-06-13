/// <reference types="@angular/localize" />

/*
 =========================================================
 * Black Dashboard Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// fake backend
import { fakeBackendInterceptor } from '@app/_helpers';

import { AppComponent } from '@app/app.component';
import { jwtInterceptor, errorInterceptor } from '@app/_helpers';
import { APP_ROUTES } from '@app/app.routes';

/*if (environment.production) {
  enableProdMode();
}*/

bootstrapApplication(AppComponent, {
  providers: [
      provideRouter(APP_ROUTES),
      provideHttpClient(
          withInterceptors([
              jwtInterceptor, 
              errorInterceptor,

              // fake backend
              fakeBackendInterceptor
          ])
      )
  ]
});