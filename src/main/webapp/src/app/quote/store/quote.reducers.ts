import { initialQuoteState, QuoteState } from './quote.state';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import {
  addQuoteFailure,
  addQuoteSuccess,
  editQuoteFailure, editQuoteSuccess, getCategoriesFailure, getCategoriesSuccess,
  getQuotesFailure,
  getQuotesSuccess
} from './quote.actions';

export const quoteFeature = "quote";

export const quoteReducers: ActionReducer<QuoteState> = createReducer(
  initialQuoteState,
  on(getQuotesSuccess, (state, action) => ({
    ...state,
    quotes: action.quotes
  })),
  on(getQuotesFailure, (state, action) => ({
    ...state
  })),
  on(addQuoteSuccess, (state, action) => ({
    ...state,
    quotes: [...state.quotes, action.quote]
  })),
  on(addQuoteFailure, (state, action) => ({
    ...state
  })),
  on(editQuoteSuccess, (state, action) => ({
    ...state,
    quotes: [...state.quotes.filter(q => q.id = action.quote.id), action.quote]
  })),
  on(editQuoteFailure, (state, action) => ({
    ...state
  })),
  on(getCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.categories
  })),
  on(getCategoriesFailure, (state, action) => ({
    ...state
  })),
);

export function reducer(state: QuoteState, action: Action): QuoteState {
  return quoteReducers(state, action);
}
