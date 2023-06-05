import { Component, OnInit } from "@angular/core";
import { NgClass, NgIf, DatePipe } from '@angular/common';
@Component({
  selector: "app-footer",
  standalone: true,
  imports: [NgIf, NgClass, DatePipe],
  templateUrl: "./footer.component.html",

})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
