import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME, FundsState } from './funds.reducer';
import { get } from '../../../util/func.util';

export const featureState = createFeatureSelector<FundsState>(FEATURE_NAME);

export const currentFunds = createSelector(featureState, get('currentFunds'));
export const withdrawals = createSelector(featureState, get('withdrawals'));
