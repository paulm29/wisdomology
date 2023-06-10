import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-view',
  templateUrl: './quote-view.component.html',
  styleUrls: ['./quote-view.component.scss']
})
export class QuoteViewComponent {
  constructor(private route: ActivatedRoute) {
  }
}
