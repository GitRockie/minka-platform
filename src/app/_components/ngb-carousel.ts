import { Component } from '@angular/core';

@Component({
	selector: 'ngbd-carousel-basic',
	standalone: true,

	templateUrl: './ngb-carousel.html',
})
export class NgbdCarouselBasic {

    
    images = [
        'assets/img/doc.jpg',
        'assets/img/mecanica.jpg',
        'assets/img/eolica.jpg'
      ];
}