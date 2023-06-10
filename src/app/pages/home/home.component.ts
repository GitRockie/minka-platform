import { Component } from '@angular/core';
import { AccountService } from '@app/_services';
import { User } from '@app/_models';





@Component({ selector:'app-home', templateUrl: 'home.component.html' })
export class HomeComponent {
 
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}

logout() {
    this.accountService.logout();
}

}