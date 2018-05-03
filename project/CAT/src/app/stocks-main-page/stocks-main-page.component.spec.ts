import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksMainPageComponent } from './stocks-main-page.component';

describe('StocksMainPageComponent', () => {
  let component: StocksMainPageComponent;
  let fixture: ComponentFixture<StocksMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
