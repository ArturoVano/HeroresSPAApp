import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Observable, first, map, take, tap } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

// Older version of guards, use CanActivateFn now with inject Fn
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarService) {}

  canActivateChild(): Observable<boolean>{
    return this.hasUser();
  }

  canActivate(): Observable<boolean> {
    return this.hasUser();
  }

  hasUser(): Observable<boolean> {
    return this.authService.getUserLoged().pipe(
      first(),
      tap(user => {
        if (!user) {
          this.snackbarService.showMessage("You are not logged in", true)
          this.router.navigate(['./auth'])
        }
      }),
      map(user => !!user)
    );
  }
}