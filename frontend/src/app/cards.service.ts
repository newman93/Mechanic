import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private url: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private user: UserService) {
  
   }

  getCards(email: string, ): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.user.getToken()}`,
    });
    let params = new HttpParams()
      .set('email', email);

    return Observable.create((observer: Observer<any>) => {
        this.http.post(`${this.url}/get/cards`, params , {headers: headers}).subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },    
          error => observer.error(error)
        )
    });
  }
}
