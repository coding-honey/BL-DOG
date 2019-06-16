import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCalendarComponent } from './animal-calendar.component';

describe('AnimalCalendarComponent', () => {
  let component: AnimalCalendarComponent;
  let fixture: ComponentFixture<AnimalCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
