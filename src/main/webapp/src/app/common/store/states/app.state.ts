import { ConfigState } from './config.state';
import { Quote } from '../../model/wisdomology';

export interface AppState {
  config: ConfigState;
  quotes: Quote[];
}

export const initialAppState: AppState = {
  config: {
    error: null,
    data: null
  },
  quotes: []
};
