import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";


@Component({
  selector: "app-footer",
  standalone: true,
  imports: [DatePipe],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
   today: number =  Date.now();

  constructor() {}

  ngOnInit() {}
}
