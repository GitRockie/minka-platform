import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCarouselComponent } from "./ng-carousel/ng-carousel.component";


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, NgbCarouselModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent,NgCarouselComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, NgCarouselComponent]
})
export class ComponentsModule {}
