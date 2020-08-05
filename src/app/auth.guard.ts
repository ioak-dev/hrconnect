import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if (url === '/unauthorized' || url === '/dashboard') {
      return true;
    }

    if (!this.isLoggedIn()) {
      this.router.navigate(['/unauthorized']);
      return false;
    } else {
      return true;
    }
  }

  public isLoggedIn(): boolean {
    let status = false;
    if ( sessionStorage.getItem('idToken') !== null) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
