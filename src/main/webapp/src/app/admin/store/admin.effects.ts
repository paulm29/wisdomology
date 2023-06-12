import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../../quote/category.service';
import {
  addCategoryReference,
  addCategoryReferenceFailure,
  addCategoryReferenceSuccess,
  getCategoryReferences,
  getCategoryReferencesFailure,
  getCategoryReferencesSuccess
} from './admin.actions';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {
  }

  getCategoryReferences$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategoryReferences),
      mergeMap(() => {
        return this.categoryService.getAll().pipe(
          map(categoryReferences => getCategoryReferencesSuccess({categoryReferences})),
          catchError(error => of(getCategoryReferencesFailure({error})))
        );
      })
    );
  });

  addCategoryReference$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategoryReference),
      mergeMap((action) => {
        return this.categoryService.add(action.categoryReference).pipe(
          map(categoryReference => addCategoryReferenceSuccess({categoryReference})),
          catchError(error => of(addCategoryReferenceFailure({error})))
        );
      })
    );
  });
}

export const adminEffects = [
  AdminEffects
];
