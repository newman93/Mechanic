import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  surname: string;
  email: string;
  password: string;
  password2: string;
  error: string;
  
  constructor(private router: Router, private authService: AuthService, public ngxSmartModalService: NgxSmartModalService){
  }

  ngOnInit() {
    this.authService.logout;
  }

  register(e) {
    e.preventDefault();
     
    this.authService.register(this.name, this.surname, this.email, this.password, this.password2).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigate(['/login']);
  }

  handleError(error) {
    this.error = JSON.parse(error._body).errors;
    this.ngxSmartModalService.create('errorModal', error).open();
  }
}
