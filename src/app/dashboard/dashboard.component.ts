import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { NavbarComponent, SidebarComponent } from '@app/_components';

@Component({
    selector: "app-dashboard",
    templateUrl: 'dashboard.component.html',
    standalone: true,
    imports: [SidebarComponent, NavbarComponent]
})
export class DashboardComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }


}