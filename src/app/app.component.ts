import { Component } from "@angular/core";
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';


import { AccountService} from './_services';
import { User } from './_models';
import { AlertComponent } from "./_components";
import { FooterComponent } from "./components";
import { NavbarComponent } from "./components";
import { HomeComponent } from './home/home.component';
@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent, FooterComponent, HomeComponent, NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  user?: User | null;

  constructor( private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}


logout() {
    this.accountService.logout();
}


}
