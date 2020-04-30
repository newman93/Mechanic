import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CardsService } from '../cards.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AddDefectService } from '../add-defect.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  email: string;
  error: string;
  cards = [];

  constructor(private user: UserService, private cardsS: CardsService, private addDefect: AddDefectService, public ngxSmartModalService: NgxSmartModalService) { 
    this.email = user.getEmail();
    this.getCards();
  }

  ngOnInit() {
  }

  getCards() {
    this.cardsS.getCards(this.email).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)  
    );
  }

  handleResponse(data) {
    this.cards = data.data;
    for(let key in this.cards) {
      this.cards[key].image = this.addDefect.getImage(this.cards[key].id);

    }
  }
  
  handleError(error) {
    this.error = JSON.parse(error._body).message;
    this.ngxSmartModalService.create('errorModal', error).open();
  }

}
