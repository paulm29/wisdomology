import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteModule } from './quote/quote.module';
import { QuoteViewComponent } from './quote/quote-view/quote-view.component';
import { QuoteEditComponent } from './quote/quote-edit/quote-edit.component';

const routes: Routes = [
  { path: 'view', component: QuoteViewComponent },
  { path: 'edit', component: QuoteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), QuoteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
