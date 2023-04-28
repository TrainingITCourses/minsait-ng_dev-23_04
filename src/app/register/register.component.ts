import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.http
      .post('http://localhost:3000/users', this.form.value)
      .subscribe((token) => {
        console.log(token);
        this.router.navigate(['/']);
      });
  }
}
