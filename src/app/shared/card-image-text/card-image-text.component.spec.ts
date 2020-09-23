import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageTextComponent } from './card-image-text.component';

describe('CardImageTextComponent', () => {
  let component: CardImageTextComponent;
  let fixture: ComponentFixture<CardImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
