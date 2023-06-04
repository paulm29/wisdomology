import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteComponent } from './quote.component';
import { RouterModule } from '@angular/router';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    QuoteViewComponent,
    QuoteEditComponent,
    QuoteListComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    QuoteListComponent
  ]
})
export class QuoteModule { }
