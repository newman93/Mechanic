import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelectImageComponent } from './add-select-image.component';

describe('AddSelectImageComponent', () => {
  let component: AddSelectImageComponent;
  let fixture: ComponentFixture<AddSelectImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSelectImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
