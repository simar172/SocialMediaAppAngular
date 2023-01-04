import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/LoginService/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.lserv.isLogin() == true) {
      return true;
    }
    this.rtr.navigate(['']);
    return false;
  }
  constructor(private lserv: LoginServiceService, private rtr: Router) {}
}
