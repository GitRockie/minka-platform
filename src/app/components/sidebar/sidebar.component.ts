import { Component, OnInit } from "@angular/core";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "admin/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "admin/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  
  {
    path: "admin/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "admin/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: "  "
  },
  {
    path: "admin/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "admin/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "users",
    title: "Users",
    icon: "icon-user-run",
    class: "tim-icons"
  },
  
  
];

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLinkActive, NgClass,NgIf, NgFor, NgIf, RouterOutlet, RouterLink ],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems?: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
