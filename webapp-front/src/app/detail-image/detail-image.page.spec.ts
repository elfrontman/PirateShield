import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImagePage } from './detail-image.page';

describe('DetailImagePage', () => {
  let component: DetailImagePage;
  let fixture: ComponentFixture<DetailImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
