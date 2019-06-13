import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePage } from './example.page';

describe('ExamplePage', () => {
  let component: ExamplePage;
  let fixture: ComponentFixture<ExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
