import { Component } from "@angular/core";


@Component({
  selector: "ng-carousel",
  templateUrl: "./ng-carousel.component.html",
  styleUrls: ["./ng-carousel.component.css"]
  
})
export class NgCarouselComponent  {
  images = [
    "assets/img/landingMinka.jpg",
    "assets/img/eolicaIndustry.jpg",
    "assets/img/team-up.jpg",
    
  ];
}
