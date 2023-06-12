import { Component, inject } from '@angular/core';
import { CategoryReference } from '../common/model/wisdomology';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { selectAdmin } from './store/admin.selectors';
import { addCategoryReference, getCategoryReferences } from './store/admin.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isComponentAlive: boolean = true;
  categoryReferences: CategoryReference[] = [];
  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    category: [null, Validators.required]
  });

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCategoryReferences());
    this.store
      .select(selectAdmin)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(adminState => {
        this.categoryReferences = adminState.categoryReferences;
      });
  }

  onSubmit(): void {
    const category = this.categoryForm.get("category")?.value || '';
    const categoryReference = {
      category
    } as CategoryReference;

    this.store.dispatch(addCategoryReference({categoryReference}));
  }

  onReset(): void {
    this.categoryForm.reset();
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
