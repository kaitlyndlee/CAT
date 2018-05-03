import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSupplementalInfoComponent } from './stock-supplemental-info.component';

describe('StockSupplementalInfoComponent', () => {
  let component: StockSupplementalInfoComponent;
  let fixture: ComponentFixture<StockSupplementalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSupplementalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSupplementalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
