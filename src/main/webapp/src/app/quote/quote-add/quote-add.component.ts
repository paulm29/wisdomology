import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { selectQuotes } from '../store/quote.selectors';
import { takeWhile } from 'rxjs';
import { Category, Quote } from '../../common/model/wisdomology';
import { Store } from '@ngrx/store';
import { addQuote, getCategories } from '../store/quote.actions';


@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.scss']
})
export class QuoteAddComponent implements OnInit, OnDestroy {
  isComponentAlive: boolean = true;
  categories: Category[] = [];
  private fb = inject(FormBuilder);
  quoteForm = this.fb.group({
    quote: [null, Validators.required],
    category: [null, Validators.required],
    comment: [null],
    sourceText: [null]
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ]
  });

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories());
    this.store
      .select(selectQuotes)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(quoteState => {
        this.categories = quoteState.categories;
      });
  }

  onSubmit(): void {
    // const quote = this.quoteForm.
    const quote = {} as Quote;
    this.store.dispatch(addQuote({quote}));
  }

  onReset() : void {
    this.quoteForm.reset();
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }


}
