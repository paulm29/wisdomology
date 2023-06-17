import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { selectQuotes } from '../store/quote.selectors';
import { takeWhile } from 'rxjs';
import { Category, CategoryReference, Comment, Quote, SourceText } from '../../common/model/wisdomology';
import { Store } from '@ngrx/store';
import { addQuote, getCategories } from '../store/quote.actions';


@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.scss']
})
export class QuoteAddComponent implements OnInit, OnDestroy {
  isComponentAlive: boolean = true;
  categoryReferences: CategoryReference[] = [];
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
        this.categoryReferences = quoteState.categories;
      });
  }

  onSubmit(): void {
    const quote = this.quoteForm.get("quote")?.value || '';
    const sourceText = this.quoteForm.get("sourceText")?.value || null;
    const comment = this.quoteForm.get("comment")?.value || '';
    const categoryReferenceId = this.quoteForm.get("category")?.value || '';
    const q = {
      quote: quote,
      sourceText: sourceText,
      comments: comment ? [{comment}]: [],
      categories: categoryReferenceId ? [{category: {id: categoryReferenceId}}]: []
    } as Quote;
    this.store.dispatch(addQuote({ quote: q}));
  }

  onReset() : void {
    this.quoteForm.reset();
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }


}
