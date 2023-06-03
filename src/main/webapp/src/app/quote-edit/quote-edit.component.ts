import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.css']
})
export class QuoteEditComponent implements OnInit {
  quoteForm: FormGroup;

  constructor() {
    this.quoteForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }
}
