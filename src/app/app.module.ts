import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { RegisterComponent } from "./account";
import { HomeComponent } from "./pages/home";
import { LoginComponent } from "./account";
import { AlertComponent } from './_components';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgChartsModule,
    
   
    
  
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    HomeComponent, 
    LoginComponent, 
    RegisterComponent, 
    AlertComponent 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },  // provider used to create fake backend
  fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
