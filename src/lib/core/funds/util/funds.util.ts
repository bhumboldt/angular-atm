import { Funds } from '../models/funds.model';
import { Observable, of, throwError } from 'rxjs';

export const withdrawFunds = (withdrawAmount: number, availableFunds: Funds): Observable<Partial<Funds>> => {
  let amountLeftToWithdraw = withdrawAmount;
  const dispensed: number[] = [];

  const sortedFundAmounts = Object.entries(availableFunds).map(([unit, unitAmount]) => ({
    unit: Number(unit),
    unitAmount
  })).sort((a, b) => b.unit - a.unit);

  for (let i = 0; i < sortedFundAmounts.length; i++) {
    const { unit, unitAmount } = sortedFundAmounts[i];
    let totalAvailableAmountForUnit = unit * unitAmount;

    while (totalAvailableAmountForUnit && amountLeftToWithdraw >= unit) {
      amountLeftToWithdraw -= unit;
      totalAvailableAmountForUnit -= unit;
      dispensed.push(unit);
    }
  }

  if (amountLeftToWithdraw > 0) {
    return throwError(() => 'Insufficient Funds available');
  }

  const dispensedFunds: Partial<Funds> = dispensed.reduce((prev, curr) => ({
    ...prev,
    [curr]: !prev[curr] ? 1 : prev[curr] + 1
  }), {} as Funds);

  return of(dispensedFunds);
}
