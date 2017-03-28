/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypografyComponent } from './typografy.component';

describe('TypografyComponent', () => {
  let component: TypografyComponent;
  let fixture: ComponentFixture<TypografyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypografyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypografyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
