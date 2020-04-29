import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpHeaders, HttpRequest, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDefectService {
  
  private url: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private user: UserService) {
  
   }

  getImages(email: string, ): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.user.getToken()}`,
    });
    let params = new HttpParams()
      .set('email', email);

    return Observable.create((observer: Observer<any>) => {
        this.http.post(`${this.url}/get/ids`, params , {headers: headers}).subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },    
          error => observer.error(error)
        )
    });
  }

  getImage(id) {
    return `${this.url}/get/image/${id}`;
  }
}
