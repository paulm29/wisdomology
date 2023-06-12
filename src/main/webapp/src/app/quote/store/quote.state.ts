import { CategoryReference, Quote } from '../../common/model/wisdomology';

export interface QuoteState {
  quotes: Quote[];
  categories: CategoryReference[];
}

export const initialQuoteState: QuoteState = {
  quotes: [],
  categories: []
};
