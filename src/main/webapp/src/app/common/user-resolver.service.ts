import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class UserResolverService {

  constructor() {
  }

  getUser() {
    return "TODO";
  }
}

export const UserResolver: ResolveFn<any> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(UserResolverService).getUser();
  };
