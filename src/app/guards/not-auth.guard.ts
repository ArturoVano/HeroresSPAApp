import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { map, tap } from 'rxjs';

// For Auth page, not enter if user is already loggued
export const notAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.getUserLoged().pipe(
    tap(user => user && router.navigate(['./'])),
    map(user => !user)
  );
};
