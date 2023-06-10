import { Category, Quote } from '../../common/model/wisdomology';

export interface QuoteState {
  quotes: Quote[];
  categories: Category[];
}

export const initialQuoteState: QuoteState = {
  quotes: [],
  categories: []
};
