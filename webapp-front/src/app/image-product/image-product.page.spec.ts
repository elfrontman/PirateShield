import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductPage } from './image-product.page';

describe('ImageProductPage', () => {
  let component: ImageProductPage;
  let fixture: ComponentFixture<ImageProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
