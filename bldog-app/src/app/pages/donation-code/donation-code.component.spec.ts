import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCodeComponent } from './donation-code.component';

describe('DonationCodeComponent', () => {
  let component: DonationCodeComponent;
  let fixture: ComponentFixture<DonationCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
