import { Component } from "@angular/core";


@Component({
  selector: "ng-carousel",
  templateUrl: "./ng-carousel.component.html",
  
})
export class NgCarouselComponent  {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
 
}
