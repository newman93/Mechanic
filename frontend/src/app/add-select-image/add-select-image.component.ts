import { Component, OnInit } from '@angular/core';
import { AddDefectService } from '../add-defect.service';
import { UserService } from '../user.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-add-select-image',
  templateUrl: './add-select-image.component.html',
  styleUrls: ['./add-select-image.component.css']
})
export class AddSelectImageComponent implements OnInit {

  email: string;
  error: string;
  images = [];
  imagesIds = [];

  constructor(private addDefect: AddDefectService, private user: UserService, public ngxSmartModalService: NgxSmartModalService) {
    this.email = user.getEmail();
    this.getImages();
   }

  ngOnInit() {
  }

  getImages() {
    this.addDefect.getImages(this.email).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)  
    );
  }

  handleResponse(data) {
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
}
