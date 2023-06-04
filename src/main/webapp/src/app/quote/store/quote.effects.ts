import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuoteService } from '../quote.service';
import { getQuotes, getQuotesFailure, getQuotesSuccess } from './quote.actions';

@Injectable()
export class QuoteEffects {
  constructor(private actions$: Actions, private quoteService: QuoteService) {
  }

  config$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getQuotes),
      switchMap(() => {
        return this.quoteService.getAll().pipe(
          map(quotes => getQuotesSuccess({quotes})),
          catchError(error => of(getQuotesFailure({error})))
        );
      })
    );
  });
}

export const quoteEffects = [
  QuoteEffects
];
