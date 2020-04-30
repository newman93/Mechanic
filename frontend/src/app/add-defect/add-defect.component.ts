import { Component, OnInit } from '@angular/core';
import { AddDefectService } from '../add-defect.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-add-defect',
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css']
})
export class AddDefectComponent implements OnInit {

  selectImage: string;
  title: string;
  description: string;
  email: string;
  error: string;
  images = [];
  imagesIds = [];

  constructor(private router: Router, private addDefect: AddDefectService, private user: UserService, public ngxSmartModalService: NgxSmartModalService) {
    this.email = user.getEmail();
    this.getImages();
   }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    this.addDefect.addDefect(this.selectImage, this.title, this.description).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigate(['/']);
  }

  getImages() {
    this.addDefect.getImages(this.email).subscribe(
      data => this.handleSelectImageResponse(data),
      error => this.handleError(error)  
    );
  }

  handleSelectImageResponse(data) {
    let ids = data.data;

    for(let key in ids) {
      this.images[key] = this.addDefect.getImage(ids[key].id);
      this.imagesIds[key] = ids[key].id;
    }
  }
  
  handleError(error) {
    this.error = JSON.parse(error._body).message;
    this.ngxSmartModalService.create('errorModal', error).open();
  }

  delete(selectImage) {
    this.addDefect.deleteImage(selectImage).subscribe(
      data => this.handleDeleteResponse(data),
      error => this.handleError(error)  
    );
  }

  handleDeleteResponse(data) {
    location.reload();
  }
}
