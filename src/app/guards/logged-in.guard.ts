import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private authService: AuthService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.authUser$.subscribe(authUser => {
        this.isLoggedIn = authUser.isLoggedIn!
    })
     console.log({ isLoggedIn: this.isLoggedIn });
      if(!this.isLoggedIn) this.router.navigate([`/must-login`])
    return this.isLoggedIn;

  }

}
