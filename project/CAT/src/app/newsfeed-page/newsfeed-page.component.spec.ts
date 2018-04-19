import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPageComponent } from './newsfeed-page.component';
import {LoginModalComponent} from '../login-modal/login-modal.component';

describe('NewsfeedPageComponent', () => {
  let component: NewsfeedPageComponent;
  let fixture: ComponentFixture<NewsfeedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPageComponent, LoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
