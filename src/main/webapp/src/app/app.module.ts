import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightDirective} from "./common/directive/highlight.directive";
import { QuoteViewComponent } from './quote-view/quote-view.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    QuoteViewComponent,
    QuoteEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
