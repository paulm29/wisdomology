import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { QuoteListDataSource, QuoteListItem } from './quote-list-datasource';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { Quote } from '../../common/model/wisdomology';
import { selectQuotes } from '../store/quote.selectors';
import { getQuotes } from '../store/quote.actions';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Quote>;
  dataSource: QuoteListDataSource;
  isComponentAlive = true;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private store: Store) {
    this.dataSource = new QuoteListDataSource();
  }

  ngOnInit() {
    this.store.dispatch(getQuotes());
    this.store
      .select(selectQuotes)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(quoteState => {
        this.dataSource.data = quoteState.quotes;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
