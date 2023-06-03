import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { Store } from '@ngrx/store';
import { Quote } from '../common/model/wisdomology';
import { map } from 'rxjs';
import { getQuotes } from './store/quote.actions';
import { selectQuotes } from './store/quote.selector';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private store: Store, private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.store.dispatch(getQuotes());
    this.store.select(selectQuotes).pipe(map(quoteState => {
      this.quotes = quoteState.quotes;
    }));
  }
}
