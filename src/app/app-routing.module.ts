import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent, RegisterComponent } from "./account";
import { HomeComponent } from "./pages/home";
import { AuthGuard } from "./_helpers";





const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: '', component: HomeComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
{
  path: "admin",
  component: AdminLayoutComponent,

  children: [
    {
      path: "",
      loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
    }
  ]
},
  
  /*{
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "", // Empty path to load the HomeComponent
        component: HomeComponent
      },
      {
        path: "dashboard",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, */
  
  
  
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
