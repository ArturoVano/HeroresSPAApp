import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Observable, map, tap } from 'rxjs';

// Older version of guards, use CanActivateFn now with inject Fn
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.authService.getUserLoged().pipe(
      tap(user => user && this.router.navigate(['auth'])),
      map(user => !user)
    );
  }
}