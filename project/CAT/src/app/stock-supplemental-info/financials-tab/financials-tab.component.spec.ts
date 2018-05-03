import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialsTabComponent } from './financials-tab.component';

describe('FinancialsTabComponent', () => {
  let component: FinancialsTabComponent;
  let fixture: ComponentFixture<FinancialsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
