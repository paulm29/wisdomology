import { Quote } from '../../common/model/wisdomology';

export interface QuoteState {
  quotes: Quote[];
}

export const initialQuoteState: QuoteState = {
  quotes: []
};
