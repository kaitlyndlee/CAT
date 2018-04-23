import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GlobalHeaderComponent} from './global-header/global-header.component';
import {AppRoutingModule} from './app-routing.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GlobalHeaderComponent,
      ],
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it('1 + 1 should equal 2', function() {
  //   expect(1 + 1).toBe(2);
  // });
});
