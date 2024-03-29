import { createAction, props } from '@ngrx/store';
import { CategoryReference, Quote } from '../../common/model/wisdomology';

export const getQuotes = createAction('[Quotes] Get Quotes');
export const getQuotesSuccess = createAction('[Quotes] Get Quotes Success', props<{ quotes: Quote[] }>());
export const getQuotesFailure = createAction('[Quotes] Get Quotes Failure', props<{ error: any }>());

export const addQuote = createAction('[Quotes] Add Quote', props<{ quote: Quote }>());
export const addQuoteSuccess = createAction('[Quotes] Add Quotes Success', props<{ quote: Quote }>());
export const addQuoteFailure = createAction('[Quotes] Add Quotes Failure', props<{ error: any }>());

export const editQuote = createAction('[Quotes] Edit Quote');
export const editQuoteSuccess = createAction('[Quotes] Edit Quotes Success', props<{ quote: Quote }>());
export const editQuoteFailure = createAction('[Quotes] Edit Quotes Failure', props<{ error: any }>());

export const deleteQuote = createAction('[Quotes] Delete Quote');
export const deleteQuoteSuccess = createAction('[Quotes] Delete Quotes Success', props<{ quote: Quote }>());
export const deleteQuoteFailure = createAction('[Quotes] Delete Quotes Failure', props<{ error: any }>());

export const getCategories = createAction('[CategoryReferences] Get Category References');
export const getCategoriesSuccess = createAction('[CategoryReferences] Get Category References Success', props<{ categories: CategoryReference[] }>());
export const getCategoriesFailure = createAction('[CategoryReferences] Get Category References Failure', props<{ error: any }>());
