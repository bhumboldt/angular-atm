import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { isLoggedInAsAdmin } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAdminLogin();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.checkAdminLogin();
  }

  checkAdminLogin(): Observable<boolean> {
    return this.store.select(isLoggedInAsAdmin).pipe(
      first(),
      tap(isAdmin => isAdmin ? void 0 : this.router.navigate(['/', 'public']))
    );
  }

}
