import { Component } from "@angular/core";
import { RouterModule, Router, RouterLink } from '@angular/router';

import { NgClass, NgIf, DatePipe } from '@angular/common';
import {NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [NgIf, NgClass, DatePipe, RouterModule, RouterLink, NgbCollapseModule],
  templateUrl: "./navbar.component.html",

})
export class NavbarComponent  {
     
  
	isMenuCollapsed = true;
  }

