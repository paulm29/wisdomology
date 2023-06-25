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
import { StoreModule } from '@ngrx/store';
import { quoteFeature, quoteReducers } from './store/quote.reducers';
import { EffectsModule } from '@ngrx/effects';
import { quoteEffects } from './store/quote.effects';
import { QuoteAddComponent } from './quote-add/quote-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    QuoteAddComponent,
    QuoteViewComponent,
    QuoteEditComponent,
    QuoteListComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
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
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    StoreModule.forFeature(quoteFeature, quoteReducers),
    EffectsModule.forFeature(quoteEffects)
  ],
  exports: [
    QuoteListComponent
  ]
})
export class QuoteModule { }
