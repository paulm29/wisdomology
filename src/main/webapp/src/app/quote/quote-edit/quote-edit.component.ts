import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.scss']
})
export class QuoteEditComponent implements OnInit {
  quoteForm: FormGroup;
  quoteId?: string;

  constructor(private router: Router, private route: ActivatedRoute) {


    this.quoteForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.quoteId = params["quoteId"]);
  }

  submit() {
    this.router.navigate(["view", this.quoteId], { relativeTo: this.route })
  }
}
