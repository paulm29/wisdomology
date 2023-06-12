import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { QuoteModule } from './quote/quote.module';
import { QuoteViewComponent } from './quote/quote-view/quote-view.component';
import { QuoteEditComponent } from './quote/quote-edit/quote-edit.component';
import { QuoteAddComponent } from './quote/quote-add/quote-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { UserResolver } from './user-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {path: '/', component: DashboardComponent, resolve: { user: () => UserResolver}},
  {path: 'quotes/:quoteId/view', component: QuoteViewComponent, canActivate: [() => inject(AuthGuard).canActivate()],},
  {
    path: 'quotes/:quoteId/edit',
    component: QuoteEditComponent,
    canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)]
  },
  {path: 'quotes/add', component: QuoteAddComponent},
  {path: 'admin', component: AdminComponent},
  // {path: 'error', component: ErrorPageComponent, data: {message: "An error occurred"}},
  //     this.route.data.subscribe((data) => {
  //       this.errorMessage = data['errorMessage'];
  //     });
  // {path: '**', redirectTo: ''},
  {path: 'auth', component: AuthComponent},
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), QuoteModule, AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
