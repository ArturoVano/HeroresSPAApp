import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  SNACKBAR_DURATION = 3000;

  constructor(private matSnackbar: MatSnackBar,) { }

  showMessage(message: string, time: boolean = true): void {
    if (!time) {
      this.matSnackbar.open(message, 'done');
    } else {
      this.matSnackbar.open(message, 'done', { 
        duration: this.SNACKBAR_DURATION
      });
    }
  }
}
