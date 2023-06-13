import { Route } from "@angular/router";


import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';

import { HomeComponent } from "./pages/home";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';





const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);



export const APP_ROUTES: Route[]= [
    { path: '', component: HomeComponent, canActivate: [authGuard]},

    { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
    
   
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },

    {
        path: "",
        component: AdminLayoutComponent,
        children: [
     
          {
            path: "admin",
            loadChildren: () => import ("./layouts/admin-layout/admin.routes.ts").then(m => m.ADMIN_ROUTES)
          }
        ]
      },
    
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];