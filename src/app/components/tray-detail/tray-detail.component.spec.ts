import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayDetailComponent } from './tray-detail.component';

describe('TrayDetailComponent', () => {
  let component: TrayDetailComponent;
  let fixture: ComponentFixture<TrayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
