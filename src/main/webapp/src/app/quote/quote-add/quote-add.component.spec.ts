import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAddComponent } from './quote-add.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { provideMockStore } from '@ngrx/store/testing';

describe('QuoteAddComponentComponent', () => {
  let component: QuoteAddComponent;
  let fixture: ComponentFixture<QuoteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ],
      declarations: [QuoteAddComponent],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(QuoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
