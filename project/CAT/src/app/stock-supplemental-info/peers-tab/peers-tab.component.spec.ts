import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeersTabComponent } from './peers-tab.component';

describe('PeersTabComponent', () => {
  let component: PeersTabComponent;
  let fixture: ComponentFixture<PeersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
