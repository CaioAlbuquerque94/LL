import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLlComponent } from './input-ll.component';

describe('InputLlComponent', () => {
  let component: InputLlComponent;
  let fixture: ComponentFixture<InputLlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
