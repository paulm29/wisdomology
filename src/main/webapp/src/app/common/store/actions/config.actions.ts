import { createAction, props } from '@ngrx/store';

export const loadConfiguration = createAction('[Configuration] Load Configuration');
export const loadConfigurationSuccess = createAction('[Configuration] Load Configuration Success', props<{ config: any }>());
export const loadConfigurationFailure = createAction('[Configuration] Load Configuration Failure', props<{ error: any }>());
