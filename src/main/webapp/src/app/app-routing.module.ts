import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteModule } from './quote/quote.module';
import { QuoteViewComponent } from './quote/quote-view/quote-view.component';
import { QuoteEditComponent } from './quote/quote-edit/quote-edit.component';
import { QuoteAddComponent } from './quote/quote-add/quote-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'quotes/:quoteId', component: QuoteViewComponent},
  {path: 'quotes/:quoteId/edit', component: QuoteEditComponent},
  {path: 'quotes/add', component: QuoteAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), QuoteModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
