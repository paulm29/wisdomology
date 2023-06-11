import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { QuoteModule } from './quote/quote.module';
import { QuoteViewComponent } from './quote/quote-view/quote-view.component';
import { QuoteEditComponent } from './quote/quote-edit/quote-edit.component';
import { QuoteAddComponent } from './quote/quote-add/quote-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error/error-page.component';
import { UserResolver } from './user-resolver.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, resolve: { user: () => UserResolver}},
  {path: 'quotes/:quoteId/view', component: QuoteViewComponent, canActivate: [() => inject(AuthGuard).canActivate()],},
  {
    path: 'quotes/:quoteId/edit',
    component: QuoteEditComponent,
    canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)]
  },
  {path: 'quotes/add', component: QuoteAddComponent},
  {path: 'error', component: ErrorPageComponent, data: {message: "An error occurred"}},
  {path: '**', redirectTo: ''},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), QuoteModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
