import { Component } from '@angular/core';
import { User } from '@app/_models';

import { AccountService } from '@app/_services';
import { NavbarComponent } from '@app/components';

@Component({ selector:'app-home',
standalone: true,
imports: [NavbarComponent],
templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    logout() {
        this.accountService.logout();
    }
 
}