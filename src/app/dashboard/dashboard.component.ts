import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
    templateUrl: 'dashboard.component.html',
    standalone: true
})
export class DashboardComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }


}