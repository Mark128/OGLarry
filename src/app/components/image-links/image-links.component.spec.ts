import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLinksComponent } from './image-links.component';

describe('ImageLinksComponent', () => {
  let component: ImageLinksComponent;
  let fixture: ComponentFixture<ImageLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
