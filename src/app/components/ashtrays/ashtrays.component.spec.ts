import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshtraysComponent } from './ashtrays.component';

describe('AshtraysComponent', () => {
  let component: AshtraysComponent;
  let fixture: ComponentFixture<AshtraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshtraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshtraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
