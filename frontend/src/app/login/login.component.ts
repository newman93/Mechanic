import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;
  data: string;

  constructor(private router: Router, private authService: AuthService, public ngxSmartModalService: NgxSmartModalService){
  }

  ngOnInit() {
    this.authService.logout();
  }

  login(e) {
    e.preventDefault();

    this.authService.login(this.email, this.password).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)  
    );
  }

  register() {
    this.router.navigate(['/register']);
  }

  handleResponse(data) {
    this.router.navigate(['/']);
  }

  handleError(error) {
    this.error = JSON.parse(error._body).message;
    this.ngxSmartModalService.create('errorModal', error).open();
  }
}
