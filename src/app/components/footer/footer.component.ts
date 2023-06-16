import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [DatePipe, RouterLink,  ],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
   today: number =  Date.now();

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPolitica() {
    this.router.navigateByUrl("/politica");
}
}
