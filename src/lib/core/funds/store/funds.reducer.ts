import { createReducer, on } from '@ngrx/store';
import { Withdrawal } from '../models/withdrawal.model';
import { Funds } from '../models/funds.model';
import { addStock, withdrawSucceeded } from './funds.actions';
import { getFundsObjectMapping } from '../util/funds.util';

export const FEATURE_NAME = 'core-funds';

export interface FundsState {
  withdrawals: Withdrawal[],
  currentFunds: Funds
}

export const initialState: FundsState = {
  withdrawals: [],
  currentFunds: {
    100: 10,
    50: 10,
    20: 10,
    10: 10,
    5: 10,
    1: 10
  }
}

export const setWithdrawSucceededState = (state: FundsState, { amount, fundsDispensed }: { amount: number, fundsDispensed: Partial<Funds> }): FundsState => ({
  ...state,
  withdrawals: [
    { amountWithdrawn: amount, date: new Date() },
    ...state.withdrawals
  ],
  currentFunds: getFundsObjectMapping(fundsDispensed).reduce((prev, curr) => ({
    ...prev,
    [curr.unit]: prev[curr.unit] - curr.unitAmount
  }), state.currentFunds)
});

export const setNewStock = (state: FundsState, { stock }: { stock: Partial<Funds> }): FundsState => ({
  ...state,
  currentFunds: getFundsObjectMapping(stock).reduce((prev, curr) => ({
    ...prev,
    [curr.unit]: prev[curr.unit] + curr.unitAmount
  }), state.currentFunds)
});


export const fundsReducer = createReducer(
  initialState,
  on(withdrawSucceeded, setWithdrawSucceededState),
  on(addStock, setNewStock)
);
