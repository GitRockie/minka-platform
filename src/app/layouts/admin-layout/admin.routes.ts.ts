import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard";
import { IconsComponent } from "../../pages/icons/icons.component";

import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";




export const ADMIN_ROUTES: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },


  
];
