import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UploadFilePickerAdapter } from '../upload-file-picker.adapter';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-upload',
  templateUrl: './add-upload.component.html',
  styleUrls: ['./add-upload.component.css']
})
export class AddUploadComponent implements OnInit {

  constructor(private http: HttpClient, private user: UserService) {}
  
  adapter = new UploadFilePickerAdapter(this.http, this.user);

  ngOnInit() {

  }

}
