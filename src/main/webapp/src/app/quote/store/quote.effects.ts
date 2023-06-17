import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuoteService } from '../quote.service';
import {
  addQuote,
  addQuoteFailure,
  addQuoteSuccess,
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  getQuotes,
  getQuotesFailure,
  getQuotesSuccess
} from './quote.actions';
import { CategoryService } from '../category.service';

@Injectable()
export class QuoteEffects {
  constructor(private actions$: Actions, private quoteService: QuoteService, private categoryService: CategoryService) {
  }

  getQuotes$ = createEffect(() => {
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

  addQuote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addQuote),
      mergeMap((action) => {
        return this.quoteService.addQuote(action.quote).pipe(
          map(quote => addQuoteSuccess({quote})),
          catchError(error => of(addQuoteFailure({error})))
        );
      })
    );
  });

  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategories),
      switchMap(() => {
        return this.categoryService.getAll().pipe(
          map(categories => getCategoriesSuccess({categories})),
          catchError(error => of(getCategoriesFailure({error})))
        );
      })
    );
  });
}

export const quoteEffects = [
  QuoteEffects
];
