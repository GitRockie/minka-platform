import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NgClass, NgIf, DatePipe } from '@angular/common';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
  }
  export const ROUTES: RouteInfo[] = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: "icon-chart-pie-36",
      class: ""
    },
    {
      path: "/projects",
      title: "Projects",
      icon: "icon-atom",
      class: ""
    },
    
  
    {
      path: "/user",
      title: "User Profile",
      icon: "icon-single-02",
      class: ""
    },
    {
      path: "/tables",
      title: "Table List",
      icon: "icon-puzzle-10",
      class: ""
    },
   
  
  ];


@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgIf, NgClass, DatePipe, RouterModule,],
  templateUrl: "./sidebar.component.html",

})
export class SidebarComponent implements OnInit {
    menuItems: any[];
  constructor() {
    this.menuItems = [];
  }

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
