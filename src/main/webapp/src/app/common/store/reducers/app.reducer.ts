import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { reducer as configReducer } from './config.reducer';
import { resetStore } from '../actions/app.actions';
import { AppState } from '../states/app.state';
import { isDevMode } from '@angular/core';


export function resetAllStates(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
// Reset all states after getting sign-out action
    if (action.type === resetStore.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

// export const metaReducers: MetaReducer<any>[] = [resetAllStates]

// export const appReducer: ActionReducerMap<AppState, Action>  = {
//   config: configReducer
// };

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
