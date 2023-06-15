import { Component } from '@angular/core';
import { User } from '@app/_models';

import { AccountService } from '@app/_services';
import { NgClass, NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu} from '@ng-bootstrap/ng-bootstrap';

@Component({ selector:'app-home',
standalone: true,
imports: [ RouterOutlet, NgClass, NgFor, NgIf, RouterLink, RouterLinkActive, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
templateUrl: 'home.component.html' })
export class HomeComponent {
    focus: any;
    focus1: any;
    user: User | null;

    constructor(
        private router: Router, 
        private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    logout() {
        this.accountService.logout();
    }
    redirectToLogin() {
        this.router.navigate(['account/login']); // Replace '/login' with the actual route/path to your Login Component
      }
      redirectToRegister() {
        this.router.navigate(['account/register']); // Replace '/login' with the actual route/path to your Login Component
      }
 
}