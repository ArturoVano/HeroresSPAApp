import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  formData = {
    username: '',
    email: '',
    password: '',
    moralAlignment: '',
  };

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  onSubmit() {
    this.authService.login("random@example.com", '123456').pipe(
      // filter((user) => !!user)
    ).subscribe(() => this.router.navigate(['/heroes']))
  }

  autoFill() {
    this.formData = {
      username: 'RandomUser',
      email: 'random@example.com',
      password: '123456',
      moralAlignment: 'good',
    };
  }
}
