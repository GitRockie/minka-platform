import {Routes } from "@angular/router";


import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';

import { HomeComponent } from "./home/home.component";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TypographyComponent } from "./pages";
import { PoliticaComponent } from "./politica/politica.component";





const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);



export const APP_ROUTES: Routes= [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, title: 'Inicio'},
    { path: 'users', loadChildren: usersRoutes },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: "politica", component: PoliticaComponent, title: 'Politica de privacidad' },

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
   
    
    

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];