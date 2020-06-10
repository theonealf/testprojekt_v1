import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core'

import { TestjasminComponent } from './testjasmin.component';
import { fromEventPattern } from 'rxjs';

describe('TestjasminComponent', () => {
  let component: TestjasminComponent;
  let fixture: ComponentFixture<TestjasminComponent>;
  let de: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestjasminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjasminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de= fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
