import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { resetStore } from '../actions/app.actions';
import { AppState } from '../states/app.state';
import { configReducer } from './config.reducer';

export function resetAllStates(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    // Reset all states after getting sign-out action
    if (action.type === resetStore.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

export const appReducers: ActionReducerMap<AppState> = {
  config: configReducer
};

// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
export const metaReducers: MetaReducer<AppState>[] = [resetAllStates];
