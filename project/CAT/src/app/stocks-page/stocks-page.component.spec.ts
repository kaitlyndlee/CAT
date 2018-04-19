import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { StocksPageComponent } from './stocks-page.component';
import {Stock, StockData} from "../Stock.model";
import {StockMarketModel} from '../stock-market.model';

describe('StocksPageComponent', () => {
  let component: StocksPageComponent;
  let fixture: ComponentFixture<StocksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit Test: Tests Stock
   * Creates a stock object and makes sure it can be populated with data
   * Creates a mock StockData object to populate the stock with
   */
  it('Stock Unit Test', () => {

    // Create mock stock  and mock json object object.
    const mockStockData: StockData = new StockData({
        Timestamp: 1,
        Close: 1,
        High: 1,
        Low: 1,
        Open: 1,
        Volume: 1
    });

    mockStockData.open      = 100;
    mockStockData.timestamp = "Today";
    mockStockData.close     = 110;
    mockStockData.high      = 120;
    mockStockData.low       = 90;
    mockStockData.volume    = 2147;


    // Grab first stock from stock market and test to ensure that it's a stock object.
    // Then update it's first daily stock value to our mock object.
    const testStock: Stock = new Stock("AAPL");
    // expect(testStock instanceof Stock).toBeTruthy();
    testStock.daily[0] = mockStockData;
    testStock.dailyLoaded = true;

    // Verify interval data is loaded to 15 corrsectly
    expect(testStock.interval).toEqual("15");

    // Test values of updated daily stock object
    expect(testStock.daily[0].open).toEqual(100);
    expect(testStock.daily[0].timestamp).toEqual("Today");
    expect(testStock.daily[0].close).toEqual(110);
    expect(testStock.daily[0].high).toEqual(120);
    expect(testStock.daily[0].low).toEqual(90);
    expect(testStock.daily[0].volume).toEqual(2147);

    // Ensure that the first object was successfully updated to our mock object.
    expect(testStock.daily[0] === mockStockData).toBeTruthy();
  });

  /**
   * Integration Test: Tests StockMarketModel, Stock, and StockData
   */
    it('Stock Market Integral Test', () => {

      // Create a stock market object and ensure it is not null
      component.ngOnInit();
      let testMarket: StockMarketModel = component.stockMarket;

      let collectiveMarket = testMarket.getCollectiveMarket();
      expect(collectiveMarket).toBeTruthy();

      // Grab the first stock from the market list and update its data
      const testStock = collectiveMarket[0].stock;
      testStock.update();
      expect(testStock).toBeTruthy();

      // Ensure the stock is an object of the Stock class
      expect(testStock instanceof Stock).toBeTruthy();

      // Verify interval data is loaded to 15 correctly
      expect(testStock.interval).toEqual("15");

      // Verify there is daily data of type StockData
      expect(testStock.getDaily()).toBeTruthy();

      });

});
