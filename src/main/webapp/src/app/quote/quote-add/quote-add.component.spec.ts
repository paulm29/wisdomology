import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAddComponent } from './quote-add.component';

describe('QuoteAddComponentComponent', () => {
  let component: QuoteAddComponent;
  let fixture: ComponentFixture<QuoteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteAddComponent]
    });
    fixture = TestBed.createComponent(QuoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
