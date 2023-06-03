import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteComponent } from './quote.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    QuoteViewComponent,
    QuoteEditComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuoteModule { }
