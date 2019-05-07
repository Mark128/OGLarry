import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniOGComponent } from './mini-og.component';

describe('MiniOGComponent', () => {
  let component: MiniOGComponent;
  let fixture: ComponentFixture<MiniOGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniOGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
