import { ConfigState } from './config.state';

export interface AppState {
  config: ConfigState;
}

export const initialAppState: AppState = {
  config: {
    error: null,
    data: null
  }
};
