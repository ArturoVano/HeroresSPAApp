import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, concatMap, filter, fromEvent, map, of, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormDataUser, User } from '../../models/user.model';
import { Alignment } from 'src/app/models/aligment.model';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';

/**
 * Component for authentification of the app, because it´s a simple app,
 * you can login or register at the same time
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject()

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    preference: ['', Validators.required],
  });

  private formSubmited$ = new BehaviorSubject<SubmitEvent | undefined>(undefined);

  // Update the reactive flow automatically
  authUser$ = this.formSubmited$.pipe(
    takeUntil(this.destroyed$),
    filter(() => this.userForm.valid),
    switchMap(() => this.authService.login(
      this.userForm.get('email')!.value!, 
      this.userForm.get('password')!.value!
    )),
    concatMap(user =>
      // If user exist, go on. If not then register it
      (user 
      ? of(user)
      : this.authService.register(this.formToUser()))  
    ),
    tap(() => this.router.navigate(['/heroes']))
  );

  aligments = [Alignment.GOOD, Alignment.BAD];

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.authUser$.subscribe();
  }

  onSubmit(event: SubmitEvent) {
    this.userForm.valid
      ? this.formSubmited$.next(event)
      : this.snackbarService.showMessage("Invalid form, prealse review the fields", true);
  }

  // Allow the user not to complete the form manually for quick access
  autoFill() {
    this.userForm.reset({
      username: 'RandomUser',
      email: 'random@example.com',
      password: '123456',
      preference: Alignment.GOOD,
    });
  }

  formToUser(): FormDataUser {
    return {
      username: this.userForm.get('username')?.value || '',
      email: this.userForm.get('email')?.value || '',
      password: this.userForm.get('password')?.value || '',
      preference: this.userForm.get('preference')?.value || undefined
    } as FormDataUser;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete()
  }
}

