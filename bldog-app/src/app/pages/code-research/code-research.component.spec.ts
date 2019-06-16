import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeResearchComponent } from './code-research.component';

describe('CodeResearchComponent', () => {
  let component: CodeResearchComponent;
  let fixture: ComponentFixture<CodeResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
