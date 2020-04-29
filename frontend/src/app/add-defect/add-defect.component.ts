import { Component, OnInit } from '@angular/core';
import { AddDefectService } from '../add-defect.service';

@Component({
  selector: 'app-add-defect',
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css']
})
export class AddDefectComponent implements OnInit {

  constructor(private addDefect: AddDefectService) { }

  ngOnInit() {
  }

}
