import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';
import { UsersModule } from './users/users.module';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'users', loadChildren: usersModule },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


