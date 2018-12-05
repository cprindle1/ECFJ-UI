import { AuthService } from './../services/auth.service';
import { Injectable, Compiler } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, Route, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _compiler: Compiler
  ) { }

  canActivate() {
    const token = localStorage.getItem('token');
    if (!token) {
      this._compiler.clearCache();
      this.router.navigate(['/login']);
      return false;
    } else {
      return this.authService
        .loggedIn()
        .map(e => {
          if (e) {
            return true;
          } else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('token');
            this._compiler.clearCache();
            this.router.navigate(['/login']);
          }
        })
        .catch(() => {
          this._compiler.clearCache();
          this.router.navigate(['/login']);
          return Observable.of(false);
        });
    }
  }
}
