import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesTabComponent } from './trades-tab.component';

describe('TradesTabComponent', () => {
  let component: TradesTabComponent;
  let fixture: ComponentFixture<TradesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
