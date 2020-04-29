import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
   }

  getEmail() {
    let email = JSON.parse(localStorage.getItem('currentUser')).email;
    
    return email;
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;

    return token;
  }
}
