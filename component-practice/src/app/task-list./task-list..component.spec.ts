import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList.Component } from './task-list..component';

describe('TaskList.Component', () => {
  let component: TaskList.Component;
  let fixture: ComponentFixture<TaskList.Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskList.Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskList.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
