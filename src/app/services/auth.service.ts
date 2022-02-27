import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://petscare.test:8089/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(user: User ): Observable<any> {
    return this.http.post(
      AUTH_API + 'login', JSON.stringify(user),httpOptions
    );
  }
  register(user: User): Observable<any> {
    return this.http.post(
      AUTH_API + 'register', JSON.stringify(user), httpOptions
    );
  }
}
