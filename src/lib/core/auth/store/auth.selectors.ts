import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, FEATURE_NAME } from './auth.reducer';
import { get } from '../../../shared/util/func.util';

export const featureState = createFeatureSelector<AuthState>(FEATURE_NAME);

export const isLoggedInAsAdmin = createSelector(featureState, get('isLoggedInAsAdmin'));
