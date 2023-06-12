import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
