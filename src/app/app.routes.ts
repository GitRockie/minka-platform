import {Routes } from "@angular/router";


import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';

import { HomeComponent } from "./home/home.component";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TypographyComponent } from "./pages";





const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);



export const APP_ROUTES: Routes= [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Inicio'},
    { path: 'users', loadChildren: usersRoutes },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },

    { path: "admin", 
      component:AdminLayoutComponent, 
      canActivate: [authGuard],
        children: [
          {
            path: "",
            loadChildren: () => import ("./layouts/admin-layout/admin.routes.ts").then(m => m.ADMIN_ROUTES)
          }
        ]
      },
      { path: "privacy", component: TypographyComponent },
    
    

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];