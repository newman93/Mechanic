import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  private url: string = 'http://127.0.0.1:8000/api';
  data: string;
  error: string;

  constructor(private router: Router, private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded'
    });

    let params = new HttpParams()
      .set('email', email)
      .set('password', password);
  

    return Observable.create((observer: Observer<any>) => {
        this.http.post(`${this.url}/login_check`, params, {headers: headers}).subscribe(
            data => {
              this.handleLoginResponse(data, email),
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
    let headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
      });
    let params = new HttpParams()
      .set('name', name)
      .set('surname', surname)
      .set('email', email)
      .set('password', password)
      .set('password2', password2);

    return Observable.create((observer: Observer<any>) => {
      this.http.post(`${this.url}/register`, params , {headers: headers}).subscribe(
          data => {
            this.handleRegisterResponse(data),
            observer.next(data);
            observer.complete();
          },              
          error => observer.error(error)
  
        );
    });
  }

  handleLoginResponse(data, email) {
    const token = data && data.token;
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
