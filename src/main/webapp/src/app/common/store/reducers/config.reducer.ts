import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ConfigState, initialConfigState } from '../states/config.state';
import { loadConfigurationFailure, loadConfigurationSuccess } from '../actions/config.actions';

export const configReducer: ActionReducer<ConfigState, Action> = createReducer(
  initialConfigState,
  on(loadConfigurationSuccess, (state, payload) => ({
    ...state,
    error: undefined,
    data: payload.config
  })),
  on(loadConfigurationFailure, (state, payload) => ({
    ...state,
    error: payload.error,
    data: undefined
  }))
);

export function reducer(state: ConfigState, action: Action) : ConfigState {
  return configReducer(state, action);
}
