import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateFn } from '@angular/router';

import { AccountService } from '@app/_services';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
class PermissionsService  {
  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | UrlTree> {
    return this.accountService.login(route.queryParams.username, route.queryParams.password).pipe(
      map(() => true),
      catchError(() => {
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return of(false);
      })
    );
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> => {
  const permissionsService = inject(PermissionsService);
  return permissionsService.canActivate(next, state);
}
