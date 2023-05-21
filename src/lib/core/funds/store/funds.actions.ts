import { createAction, props } from '@ngrx/store';
import { Funds } from '../models/funds.model';

export const withdrawAmount = createAction(`[CORE: Funds] Withdraw amount`, props<{ amount: number }>());

export const withdrawSucceeded = createAction(`[CORE: Funds] Withdrawal succeeded`, props<{ fundsDispensed: Partial<Funds>, amount: number }>());

export const withdrawFailed = createAction(`[CORE: Funds] Withdrawal failed`);
