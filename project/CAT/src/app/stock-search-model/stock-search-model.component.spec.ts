import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchModelComponent } from './stock-search-model.component';

describe('StockSearchModelComponent', () => {
  let component: StockSearchModelComponent;
  let fixture: ComponentFixture<StockSearchModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSearchModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
