import { QuoteState } from './quote.state';
import { createFeatureSelector } from '@ngrx/store';

export const quotesFeatureKey = 'quotes'

export const selectQuotes = createFeatureSelector<QuoteState>(quotesFeatureKey)
