import { createReducer } from '@ngrx/store';
import { Withdrawal } from '../models/withdrawal.model';
import { Funds } from '../models/funds.model';

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

export const fundsReducer = createReducer(
  initialState
);
