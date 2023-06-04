import { QuoteState } from './quote.state';
import { createFeatureSelector } from '@ngrx/store';
import { quoteFeature } from './quote.reducers';

export const selectQuotes = createFeatureSelector<QuoteState>(quoteFeature)
