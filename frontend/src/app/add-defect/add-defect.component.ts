import { Component, OnInit } from '@angular/core';
import { AddDefectService } from '../add-defect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-defect',
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css']
})
export class AddDefectComponent implements OnInit {

  selectImage: string;
  title: string;
  description: string;

  constructor(private router: Router, private addDefect: AddDefectService) { }

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

  handleError(error) {
    console.log(error);
  }
}
