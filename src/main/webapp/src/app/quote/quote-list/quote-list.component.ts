import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { Quote } from '../../common/model/wisdomology';
import { selectQuotes } from '../store/quote.selectors';
import { getQuotes } from '../store/quote.actions';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Quote>;
  dataSource: MatTableDataSource<Quote>;
  isComponentAlive = true;

  displayedColumns = ['quote', 'category', 'actions'];
  selection = new SelectionModel<Quote>(false, []);

  constructor(private store: Store) {
    this.dataSource = new MatTableDataSource<Quote>([]);
  }

  ngOnInit() {
    this.store.dispatch(getQuotes());
    this.store
      .select(selectQuotes)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe((quoteState) => {
        this.dataSource.data = quoteState.quotes;
        this.updateTable();
      });
  }

  updateTable(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
