import { Component, OnInit } from '@angular/core';
import { ILotteryTicket } from '../lottery-ticket/ILotteryTicket';

@Component({
  selector: 'app-lottery-page',
  templateUrl: './lottery-page.component.html',
  styleUrls: ['./lottery-page.component.less']
})
export class LotteryPageComponent implements OnInit {

  public tickets : ILotteryTicket[] = [];
  public playPressed: boolean = false;

  constructor() { 
    this.initTickets();
  }

  initTickets() {
    for (let i = 0; i < 4; i++) {
      this.tickets[i] = {
        width: 7,
        height: 7,
        indexValue: i,
        numberOfItemsToSelect: 6,
        selectedValues: []
      };
    }
  }

  ngOnInit(): void {
  }

  play() {
    this.playPressed = true;
  }

  getResult(ticket: ILotteryTicket) {
    if (!ticket.selectedValues.length) {
      return "empty";
    }

    const missing = ticket.numberOfItemsToSelect - ticket.selectedValues.length;

    if (missing > 0) {
      return `Error: ${missing} marks are missing`;
    }

    if (missing < 0) {
      return `Error: please remove ${missing} marks`;
    }

    return ticket.selectedValues.join(', ');
  }
}
