import { Component } from '@angular/core';
import { User } from '@app/_models';

import { AccountService } from '@app/_services';

@Component({ selector:'app-home', templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    logout() {
        this.accountService.logout();
    }
 
}