import { createSelector } from '@ngrx/store';
import { currentFunds } from '../../../core/funds/store/funds.selectors';
import { Funds } from '../../../core/funds/models/funds.model';
import { getFundsObjectMapping } from '../../../core/funds/util/funds.util';

export const displayFunds = createSelector(currentFunds, (funds: Funds) => getFundsObjectMapping(funds));
export const sortedDisplayFunds = createSelector(displayFunds, (funds) => funds.sort((a, b) => b.unit - a.unit));
