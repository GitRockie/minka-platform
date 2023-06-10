import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AccountService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    static canActivateFn: any;
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivateFn(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        const user = this.accountService.userValue;
        if (user) {
            // User is authenticated, allow access
            return true;
        }

        // User is not authenticated, redirect to login page with return URL
        return this.router.createUrlTree(['/account/login'], {
            queryParams: { returnUrl: state.url }
        });
    }
}
