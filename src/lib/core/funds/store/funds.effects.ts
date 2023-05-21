import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addStock, withdrawAmount, withdrawFailed, withdrawSucceeded } from './funds.actions';
import { map, of, catchError, tap, withLatestFrom, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { withdrawFunds } from '../util/funds.util';
import { currentFunds } from './funds.selectors';


@Injectable()
export class FundsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly snackbar: MatSnackBar
  ) {}

  attemptWithdrawal$ = createEffect(() => this.actions$.pipe(
    ofType(withdrawAmount),
    withLatestFrom(this.store.select(currentFunds)),
    switchMap(([{ amount }, funds]) => withdrawFunds(amount, funds).pipe(
      map((fundsDispensed) => withdrawSucceeded({ amount, fundsDispensed })),
      catchError(() => of(withdrawFailed()))
    )),
  ));

  withdrawalSucceeded$ = createEffect(() => this.actions$.pipe(
    ofType(withdrawSucceeded),
    tap(({ amount }) => this.snackbar.open(`Dispensed $${amount}`, undefined, { duration: 3000 }))
  ), { dispatch: false });

  withdrawalFailed$ = createEffect(() => this.actions$.pipe(
    ofType(withdrawFailed),
    tap(() => this.snackbar.open('Insufficient Funds', 'Dismiss'))
  ), { dispatch: false});

  restockSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(addStock),
    tap(() => this.snackbar.open('Stock added successfully', undefined, { duration: 3000 }))
  ), { dispatch: false });
}
