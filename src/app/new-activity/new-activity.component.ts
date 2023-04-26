import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent implements OnInit {
  form: FormGroup = this.formBuilder.group(
    {
      title: ['', [Validators.required, Validators.minLength(5)]],
      location: ['Spain', [Validators.required, Validators.minLength(3)]],
    },
    {
      validators: [],
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  onAddClick() {
    if (this.form.value.title === '' || this.form.value.location === '') {
      return;
    }
    console.log(this.form.value);
  }
}
