import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { User } from './common/model/user';

@Injectable({
  providedIn: 'root'
})
class UserResolverService {

  constructor() {
  }

  getUser(): User {
    return new User();
  }
}

export const UserResolver: ResolveFn<any> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // route.paramMap.get('id')
    // this.activatedRoute.data.subscribe(
    return inject(UserResolverService).getUser();
  };
