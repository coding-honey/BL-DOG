import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRegisterComponent } from './donation-register.component';

describe('DonationRegisterComponent', () => {
  let component: DonationRegisterComponent;
  let fixture: ComponentFixture<DonationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
