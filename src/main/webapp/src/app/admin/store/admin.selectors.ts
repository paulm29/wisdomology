import { createFeatureSelector } from '@ngrx/store';
import { AdminState } from './admin.state';
import { adminFeature } from './admin.reducers';


export const selectAdmin = createFeatureSelector<AdminState>(adminFeature)
