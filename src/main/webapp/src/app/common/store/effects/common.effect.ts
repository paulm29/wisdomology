import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addCategoryReferenceFailure, getCategoryReferencesFailure } from '../../../admin/store/admin.actions';
import { map } from 'rxjs/operators';
import { errorNotification } from '../actions/notification.action';

@Injectable()
export class CommonEffect {

  error$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        getCategoryReferencesFailure,
        addCategoryReferenceFailure
      ),
      map(action => errorNotification({ error: action.error }))
    );
  });

  constructor(private actions$: Actions) {}
}
