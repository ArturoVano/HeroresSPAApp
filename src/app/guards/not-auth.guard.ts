import { CanActivateFn } from '@angular/router';

// For Auth page, not enter if user is already loggued
export const notAuthGuard: CanActivateFn = (route, state) => {
  return !localStorage.getItem('token');
};
