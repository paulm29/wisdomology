import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightDirective } from "./common/directive/highlight.directive";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appEffects } from './common/store/effects/app.effects';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthInterceptor } from './auth.interceptor';
import { QuoteComponent } from './quote/quote.component';
import { QuoteViewComponent } from './quote/quote-view/quote-view.component';
import { QuoteEditComponent } from './quote/quote-edit/quote-edit.component';
import { QuoteModule } from './quote/quote.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot(appReducer, {metaReducers: metaReducers}),
    StoreModule.forRoot(),
    EffectsModule.forRoot(appEffects),
    QuoteModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
    provide: MAT_DATE_LOCALE,
    useValue: 'en-AU'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
