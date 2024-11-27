import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Older version of guards, use CanActivateFn now
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      this.router.navigate(['auth']);
    }
    return isAuthenticated;
  }
}