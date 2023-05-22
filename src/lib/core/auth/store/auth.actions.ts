import { createAction, props } from '@ngrx/store';

export const submitAdminPassword = createAction(`[CORE: Auth] Submit Admin password`, props<{ password: string }>());

export const adminPasswordFailed = createAction(`[CORE: Auth] Admin Password Failed`);

export const adminPasswordSucceeded = createAction(`[CORE: Auth] Admin Password Succeeded`);

export const navigatedToPublicRoute = createAction(`[CORE: Auth] Navigated to Public Route`);

export const showAdminPasswordModal = createAction(`[CORE: Auth] Show Admin Password Modal`);
