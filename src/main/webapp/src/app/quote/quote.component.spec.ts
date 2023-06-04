import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuoteComponent', () => {
  // let actions$: Observable<Action>;
  // let effects: UsiEffect;
  // let mockStore: MockStore;
  // const mockApplicantService = createMock(ApplicantService);
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
      declarations: [QuoteComponent]
    });
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // effects = TestBed.get(UsiEffect);
    // actions$ = TestBed.get(Actions);
    // mockStore = TestBed.get(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
