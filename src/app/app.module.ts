import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { LoginComponent } from "./account";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { NgChartsModule } from 'ng2-charts';
import { RegisterComponent } from "./account";
import { HomeComponent } from "./pages/home";



@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgChartsModule,
   
    
  
  ],
  declarations: [AppComponent, AdminLayoutComponent, HomeComponent, LoginComponent, RegisterComponent],
  providers: [  // provider used to create fake backend
  fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
