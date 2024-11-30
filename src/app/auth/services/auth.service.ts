import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../models/user.model';
import { Observable, filter, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Find if the user is registered and set the token
  login(email: string, password: string): Observable<User | undefined> {
    return this.http.get<User[]>(environments.users).pipe(
      map(users => users.find(user => user.email === email && user.password === password)),
      tap(user => this.setToken(user))
    );
  }

  // Save a new user
  register(user: User): Observable<User | undefined> {
    return this.http.post<User>(environments.users, user).pipe(
      tap(user => this.setToken(user))
    );
  }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.router.navigate(['/auth']);
    }
  }

  // Get the current valid user, useful also to check if is correctly authenticated
  getUserLoged(): Observable<User | undefined> {
    const token = localStorage.getItem('token');
    return token 
      ? this.http.get<User>(environments.users + '/' + token)
      : of(undefined);
  }

  // Save user token
  private setToken(user: User | undefined) {
    if (user?.id) {
      localStorage.setItem('token', user.id.toString());
    }
  }

}
