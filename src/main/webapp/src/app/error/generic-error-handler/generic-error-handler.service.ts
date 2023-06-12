import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GenericErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any) {
    const zone = this.injector.get(NgZone);
    const router = this.injector.get(Router);
    console.error('Unexpected Error:', error);

    // we believe that unhandled http errors would almost always cause the application to be unusable.
    // e.g. if the list of courses failed to load
    // whereas other unhandled errors may be recoverable for example errors thrown by angular that have no direct impact
    if (error.name === 'HttpErrorResponse') {
      zone.run(() => {
        router.navigateByUrl('/error');
      });
    }
  }
}
