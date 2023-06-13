import { Component } from "@angular/core";
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import { AccountService} from './_services';
import { User } from './_models';
import { AlertComponent } from "./_components";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent],
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
