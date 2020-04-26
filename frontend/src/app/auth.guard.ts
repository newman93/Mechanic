import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log( JSON.parse(localStorage.getItem('currentUser')).username );
      return true;
  }

    console.log(localStorage.getItem('currentUser'));
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
