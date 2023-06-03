import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import * as Url from 'url-parse';
import { Store } from '@ngrx/store';
import { ConfigService } from './common/service/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  signInUrl = '/sign-in';
  isRefreshingToken = false;

  constructor(
    private router: Router,
    // private identityService: IdentityService,
    private store: Store,
    private configService: ConfigService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone());
  //   // return Observable.of
  //   // return request;
  //   // return this.injectAuthHeaderInRequest(request)
  //   //   .pipe(switchMap(r => next.handle(r)))
  //   //   .pipe(
  //   //     catchError(event => {
  //   //       if (event instanceof HttpErrorResponse && event.status === 403) {
  //   //         // if (this.identityService.isTokenExpired()) {
  //   //         //   return this.refreshAndRetry(request, next);
  //   //         // }
  //   //         this.signoutAndNavigateToSignin();
  //   //       }
  //   //       return throwError(event);
  //   //     })
  //   //   );
  }

  // injectAuthHeaderInRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
  //   if (this.doesURLRequireToken(request.url)) {
  //     return this.identityService.getValidIDToken().pipe(
  //       map(authToken => {
  //         // return this.addToken(request, authToken);
  //       })
  //     );
  //   }
  //   return of(request);
  // }

  // private refreshAndRetry(request: HttpRequest<any>, next: HttpHandler) {
  //   return this.injectAuthHeaderInRequest(request)
  //     .pipe(
  //       catchError(err => {
  //         this.signoutAndNavigateToSignin();
  //         return throwError('refresh token failed!!!', err);
  //       })
  //     )
  //     .pipe(switchMap(r => next.handle(r)));
  // }

  // private doesURLRequireToken(requestUrl: string): boolean {
  //   try {
  //     const url = new Url(requestUrl);
  //     const authenticatedDomains: string[] = this.configService.getConfig().authenticatedDomains;
  //     return includes(authenticatedDomains, url.host);
  //   } catch (e) {
  //     return false;
  //   }
  // }

  private addToken(request: HttpRequest<any>, authToken: string) {
    return request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
  }

  private signoutAndNavigateToSignin() {
    // this.store.dispatch(signOut());
    this.router.navigateByUrl(this.signInUrl);
  }

}
