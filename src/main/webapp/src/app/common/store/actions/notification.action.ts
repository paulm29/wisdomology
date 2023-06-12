import { createAction, props } from '@ngrx/store';

export const errorNotification = createAction('[Notification] Error', props<{ error: string }>());
export const pushNotification = createAction('[Notification] Push Notification', props<{ message: string }>());
