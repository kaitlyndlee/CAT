import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklistItemComponent } from './stocklist-item.component';

describe('StocklistItemComponent', () => {
  let component: StocklistItemComponent;
  let fixture: ComponentFixture<StocklistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocklistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
