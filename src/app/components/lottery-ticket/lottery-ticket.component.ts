import { Component, Input, OnInit } from '@angular/core';
import { GameApiClientService } from '../../services/game-api-client.service';
import { ILotteryTicket } from './ILotteryTicket';

interface Row {
  tiles: boolean[];
}

@Component({
  selector: 'app-lottery-ticket',
  templateUrl: './lottery-ticket.component.html',
  styleUrls: ['./lottery-ticket.component.less']
})

export class LotteryTicketComponent implements OnInit {



  @Input()
  public properties: ILotteryTicket = {
    height: 7,
    width: 7,
    indexValue: 0,
    numberOfItemsToSelect: 6,
    selectedValues: []
  };

  public table: Row[] = [];

  constructor(private apiClientService: GameApiClientService) { }

  ngOnInit(): void {
    this.initializeTiles();
  }

  initializeTiles() {
    for (let i = 0; i < this.properties.height; i++) {        
      this.table[i] = {
        tiles: []
      };
      for (let j = 0; j < this.properties.width; j++) {
        this.table[i].tiles[j] = false;
      }
    }

    this.properties.selectedValues = [];
  }

  onSelect(row: number, col: number) {
    const isCurrentlyChecked = this.table[row].tiles[col];

    const selectedItemValue = (this.properties.width * row) + col + 1;

    this.table[row].tiles[col] = !isCurrentlyChecked;

    if (isCurrentlyChecked) {
      this.properties.selectedValues = this.properties.selectedValues.filter(a => a !== selectedItemValue);
    } else {
      this.properties.selectedValues.push(selectedItemValue);
    }
  }

  isSelected(row: number, col: number) {
    return this.table[row].tiles[col];
  }

  randomize() {
      this.initializeTiles();
      this.apiClientService.getRandomMock(this.properties.numberOfItemsToSelect, this.properties.height * this.properties.width).subscribe((numbers) => this.fillRandom(numbers));
  }

  fillRandom(numbers: number[]) {
    for(let number of numbers) {
      const row = Math.floor((number - 1)/this.properties.height);
      const col = Math.floor((number - 1)%this.properties.width);

      this.table[row].tiles[col] = true;
    }

    this.properties.selectedValues.push(...numbers);
  }
}
