import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { filter, map, tap } from 'rxjs';
import { adminPasswordFailed, adminPasswordSucceeded, navigatedToPublicRoute, showAdminPasswordModal, submitAdminPassword } from './auth.actions';
import { MatDialog } from '@angular/material/dialog';
import { AdminPasswordComponent } from '../../../modals/admin-password/admin-password.component';
import { Router } from '@angular/router';
import { checkAdminPassword } from '../util/auth.util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar
  ) {}

  publicNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(nav => nav.payload.routerState.url.includes('public')),
    map(() => navigatedToPublicRoute())
  ));

  showPasswordModal$ = createEffect(() => this.actions$.pipe(
    ofType(showAdminPasswordModal),
    tap(() => this.dialog.open(AdminPasswordComponent, {
      disableClose: true,
      width: '500px',
      height: '250px',
    }))
  ), { dispatch: false });

  navigateToAdmin$ = createEffect(() => this.actions$.pipe(
    ofType(adminPasswordSucceeded),
    tap(() => this.dialog.closeAll()),
    tap(() => this.router.navigate(['/', 'admin']))
  ), { dispatch: false });

  checkAdminPassword$ = createEffect(() => this.actions$.pipe(
    ofType(submitAdminPassword),
    map(({ password }) => checkAdminPassword(password) ? adminPasswordSucceeded() : adminPasswordFailed())
  ));

  adminPasswordFailure$ = createEffect(() => this.actions$.pipe(
    ofType(adminPasswordFailed),
    tap(() => this.snackbar.open('Password is incorrect', 'Dismiss'))
  ), { dispatch: false });

}
