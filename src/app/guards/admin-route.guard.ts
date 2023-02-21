import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { UserType } from 'src/enums/user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {
  isAdmin!: boolean;
  isLoggedIn!: boolean;
  constructor(private authService: AuthService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.authUser$.subscribe(autUser => {
        this.isAdmin = autUser.userType === UserType.Admin;
      })
      console.log({isAdmin: this.isAdmin});
      //if(!this.isLoggedIn) this.router.navigate(['/must-login']);
      if(!this.isAdmin )this.router.navigate(['/not-allowed']);

    return this.isAdmin;
  }

}
