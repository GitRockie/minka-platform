import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AccountService } from './_services';
import { User } from './_models';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  [x: string]: any;
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
}
login() {
    this.accountService.login('user', 'password')
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = '/admin';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
}

logout() {
    this.accountService.logout();
}


}
