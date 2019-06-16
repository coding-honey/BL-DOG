import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationLedgerComponent } from './donation-ledger.component';

describe('DonationLedgerComponent', () => {
  let component: DonationLedgerComponent;
  let fixture: ComponentFixture<DonationLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
