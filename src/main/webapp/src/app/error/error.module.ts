import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error-component/error.component';
import { GenericErrorHandler } from './generic-error-handler/generic-error-handler.service';
import { ErrorRoutingModule } from './error-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule, MatCardModule, MatButtonModule, MatListModule],
  bootstrap: [ErrorComponent],
  providers: [{ provide: ErrorHandler, useClass: GenericErrorHandler }]
})
export class ErrorModule {}
