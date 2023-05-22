import { createReducer, on } from '@ngrx/store';
import { adminPasswordSucceeded, navigatedToPublicRoute } from './auth.actions';

export const FEATURE_NAME = 'core-auth';

export interface AuthState {
  isLoggedInAsAdmin: boolean
}

export const initialState: AuthState = {
  isLoggedInAsAdmin: false
}

export const setIsLoggedInAsAdmin = (isLoggedInAsAdmin: boolean) => (state: AuthState): AuthState => ({
  ...state,
  isLoggedInAsAdmin
});

export const authReducer = createReducer(
  initialState,
  on(adminPasswordSucceeded, setIsLoggedInAsAdmin(true)),
  on(navigatedToPublicRoute, setIsLoggedInAsAdmin(false))
);
