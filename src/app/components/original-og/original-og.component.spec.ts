import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalOGComponent } from './original-og.component';

describe('OriginalOGComponent', () => {
  let component: OriginalOGComponent;
  let fixture: ComponentFixture<OriginalOGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalOGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
