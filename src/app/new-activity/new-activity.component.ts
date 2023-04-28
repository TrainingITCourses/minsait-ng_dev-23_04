import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from '../core/activities.service';
import { AGE_CATEGORIES } from '../data/activities.data';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent implements OnInit {
  response: any;

  form: FormGroup = this.formBuilder.group(
    {
      title: ['', [Validators.required, Validators.minLength(5)]],
      location: ['Spain', [Validators.required, Validators.minLength(3)]],
      price: [
        10,
        [Validators.required, Validators.min(0), Validators.max(1000)],
      ],
      ageCategory: 'adult',
    },
    {
      validators: [],
    }
  );

  ageCategories = AGE_CATEGORIES;

  constructor(
    private formBuilder: FormBuilder,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {}
  onAddClick() {
    if (this.form.value.title === '' || this.form.value.location === '') {
      return;
    }
    console.log('Antes en el espacio y en el tiempo', this.form.value);
    this.activitiesService.add$(this.form.value).subscribe((response) => {
      this.response = response;
      console.log('Después en el tiempo pero no en el espacio', response);
    });
    console.log('Después en el espacio pero no en el tiempo', this.form.value);
  }
  getErrorMessage(field: string) {
    const errors = this.form.get(field)?.errors;
    if (!errors) return;
    let message;
    if (errors['required']) {
      message = 'You must enter a value';
    } else if (errors['minlength']) {
      message = 'Min length is 5';
    } else if (errors['max']) {
      message = 'Max value is 1000';
    } else if (errors['min']) {
      message = 'Min value is 0';
    }
    return message;
  }
}
