import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AdminState, initialAdminState } from './admin.state';
import {
  addCategoryReferenceFailure,
  addCategoryReferenceSuccess,
  getCategoryReferencesFailure,
  getCategoryReferencesSuccess
} from './admin.actions';
import { addQuoteFailure, addQuoteSuccess } from '../../quote/store/quote.actions';


export const adminFeature = "admin";

export const adminReducers: ActionReducer<AdminState> = createReducer(
  initialAdminState,
  on(getCategoryReferencesSuccess, (state, action) => ({
    ...state,
    categoryReferences: action.categoryReferences
  })),
  on(getCategoryReferencesFailure, (state, action) => ({
    ...state
  })),
  on(addCategoryReferenceSuccess, (state, action) => ({
    ...state,
    quotes: [...state.categoryReferences, action.categoryReference]
  })),
  on(addCategoryReferenceFailure, (state, action) => ({
    ...state
  })),
);

export function reducer(state: AdminState, action: Action): AdminState {
  return adminReducers(state, action);
}
