import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacoCardDetalheComponent } from './laco-card-detalhe.component';

describe('LacoCardDetalheComponent', () => {
  let component: LacoCardDetalheComponent;
  let fixture: ComponentFixture<LacoCardDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacoCardDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacoCardDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
