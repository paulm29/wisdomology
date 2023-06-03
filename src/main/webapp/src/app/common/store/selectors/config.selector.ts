import { AppState } from '../states/app.state';

export const selectConfig = (state: AppState) => state.config;
