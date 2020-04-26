import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  private url: string = 'http://127.0.0.1:8000/api';
  data: string;
  error: string;

  constructor(private router: Router, private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<any> {
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    return Observable.create((observer: Observer<any>) => {
        this.http.post(`${this.url}/login_check`, body ,{headers : headers} ).subscribe(
          data => {
            this.handleLoginResponse(this.data, email),
            observer.next(data);
            observer.complete();
          },    
          error => observer.error(error)
        )
    });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  register(name: string, surname: string, email: string, password: string, password2: string): Observable<any> {
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    let body = new URLSearchParams();
    body.set('name', name);
    body.set('surname', surname);
    body.set('email', email);
    body.set('password', password);
    body.set('password2', password2);

    return Observable.create((observer: Observer<any>) => {
      this.http.post(`${this.url}/register`, body ,{headers : headers} )
        .subscribe(
          data => {
            this.handleRegisterResponse(this.data),
            observer.next(data);
            observer.complete();
          },              
          error => observer.error(error)
  
        );
    });
  }

  handleLoginResponse(data, email) {
    const token = data.json() && data.json().token;
    if (token) {
      this.token = token;

      localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
      
      return true;
    } else {
      return false;
    }
  }

  handleRegisterResponse(data) {
  }
}
