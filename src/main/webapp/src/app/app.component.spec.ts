import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  // let actions$: Observable<Action>;
  // let effects: UsiEffect;
  // let mockStore: MockStore;
  // const mockApplicantService = createMock(ApplicantService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        // { provide: ApplicantService, useValue: mockApplicantService },
        provideMockStore({})
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    // effects = TestBed.get(UsiEffect);
    // actions$ = TestBed.get(Actions);
    // mockStore = TestBed.get(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Wisdomology'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Wisdomology');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('webapp app is running!');
  });
});
