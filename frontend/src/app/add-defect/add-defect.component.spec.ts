import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefectComponent } from './add-defect.component';

describe('AddDefectComponent', () => {
  let component: AddDefectComponent;
  let fixture: ComponentFixture<AddDefectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDefectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
