import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteComponent } from './quote.component';



@NgModule({
  declarations: [
    QuoteViewComponent,
    QuoteEditComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuoteModule { }
