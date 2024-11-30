import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { first, map, tap } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

// For Auth page, not enter if user is already loggued
export const notAuthGuard: CanActivateFn = (route, state) => {
  console.log('notAuthGuard');
  const router = inject(Router);
  const authService = inject(AuthService);
  const snackbarService = inject(SnackbarService);

  return authService.getUserLoged().pipe(
    first(),
    tap(user => {
      if (user) {
        snackbarService.showMessage("You are already logged in", true);
        router.navigate(['./']);
      }
    }),
    map(user => !user)
  );
};
