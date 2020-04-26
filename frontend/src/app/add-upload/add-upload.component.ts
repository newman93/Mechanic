import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UploadFilePickerAdapter } from '../upload-file-picker.adapter';

@Component({
  selector: 'app-add-upload',
  templateUrl: './add-upload.component.html',
  styleUrls: ['./add-upload.component.css']
})
export class AddUploadComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  adapter = new UploadFilePickerAdapter(this.http);

  ngOnInit() {

  }

}
