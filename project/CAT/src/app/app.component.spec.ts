import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GlobalHeaderComponent} from './global-header/global-header.component';
import {Router} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GlobalHeaderComponent,
        Router
      ],
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
