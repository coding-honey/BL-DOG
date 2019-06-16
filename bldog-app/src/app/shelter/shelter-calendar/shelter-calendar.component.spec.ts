import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterCalendarComponent } from './shelter-calendar.component';

describe('ShelterCalendarComponent', () => {
  let component: ShelterCalendarComponent;
  let fixture: ComponentFixture<ShelterCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
