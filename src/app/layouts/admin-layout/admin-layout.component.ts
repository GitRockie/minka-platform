import { Component, OnInit } from "@angular/core";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu} from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent, NavbarComponent, NavbarHomeComponent, FooterComponent } from "@app/components";


import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RouterOutlet, RouterLink, RouterLinkActive, SidebarComponent, NavbarComponent, NavbarComponent, FooterComponent, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";

  user: User | null;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }
  
  changeSidebarColor(color: string){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color: string){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {}
}
