import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts";
import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';




const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);


export const APP_ROUTES: Routes = [
    { path: '', component: AdminLayoutComponent, canActivate: [authGuard] },
    { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];