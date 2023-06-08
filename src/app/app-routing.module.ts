import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HomeComponent } from "./pages/home";
import { LoginComponent, RegisterComponent } from "./account";
import { DashboardComponent } from "./pages/dashboard";



const routes: Routes = [
  { path: '', component: AdminLayoutComponent, pathMatch: 'full'   },
  {
    path: "account/login", component: LoginComponent
  },
  { path: 'account/register', component: RegisterComponent },
  {
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
  }, 
  
  
  {
    path: "**",
    redirectTo: ""
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
