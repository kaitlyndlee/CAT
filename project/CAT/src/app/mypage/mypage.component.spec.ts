import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageComponent } from './mypage.component';
import {LoginModalComponent} from '../login-modal/login-modal.component';

describe('MypageComponent', () => {
  let component: MypageComponent;
  let fixture: ComponentFixture<MypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypageComponent, LoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
