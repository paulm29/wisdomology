import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';

const routes: Routes = [
  { path: 'view', component: QuoteViewComponent },
  { path: 'edit', component: QuoteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
