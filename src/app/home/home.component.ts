import { Component } from '@angular/core';



import { NgClass, NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu} from '@ng-bootstrap/ng-bootstrap';

@Component({ selector:'app-home',
standalone: true,
imports: [ RouterOutlet, NgClass, NgFor, NgIf, RouterLink, RouterLinkActive, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
templateUrl: 'home.component.html' })
export class HomeComponent  {


    constructor(
        private router: Router, 
        ) {
        
    }

    redirectToLogin() {
        this.router.navigate(['account/login']); // Replace '/login' with the actual route/path to your Login Component
      }
      redirectToRegister() {
        this.router.navigate(['account/register']); // Replace '/login' with the actual route/path to your Login Component
      }
 
}