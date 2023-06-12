import { createAction, props } from '@ngrx/store';
import { CategoryReference } from '../../common/model/wisdomology';

export const getCategoryReferences = createAction('[Category References] Get Category References');
export const getCategoryReferencesSuccess = createAction('[Category References] Get Category References Success', props<{ categoryReferences: CategoryReference[] }>());
export const getCategoryReferencesFailure = createAction('[Category References] Get Category References Failure', props<{ error: any }>());

export const addCategoryReference = createAction('[Category References] Add Category References', props<{ categoryReference: CategoryReference }>());
export const addCategoryReferenceSuccess = createAction('[Category References] Add Category References Success', props<{ categoryReference: CategoryReference }>());
export const addCategoryReferenceFailure = createAction('[Category References] Add Category References Failure', props<{ error: any }>());
