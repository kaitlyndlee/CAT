import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordReaderComponent } from './keyword-reader.component';

describe('KeywordReaderComponent', () => {
  let component: KeywordReaderComponent;
  let fixture: ComponentFixture<KeywordReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
