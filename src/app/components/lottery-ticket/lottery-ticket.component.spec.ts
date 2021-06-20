import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTicketComponent } from './lottery-ticket.component';

describe('LotteryTicketComponent', () => {
  let component: LotteryTicketComponent;
  let fixture: ComponentFixture<LotteryTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
