import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from './gte.validator';

function matchPassword(abstractControl: AbstractControl) {
  const val = abstractControl.value;
  return (val.password === val.confirmPassword) ? null : {notMatch: true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, {validators: matchPassword}),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [gte]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
  });
  countries = [
    {id: 1, name: 'Korea'},
    {id: 2, name: 'USA'},
    {id: 3, name: 'UK'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(rForm: FormGroup) {
    console.log(rForm.value);
  }

  get email() {
    return this.rForm.get('email');
  }

  get passwords() {
    return this.rForm.get('passwords');
  }

  get password() {
    return this.rForm.get(['passwords', 'password']);
  }

  get confirmPassword() {
    return this.rForm.get(['passwords', 'confirmPassword']);
  }

  get country() {
    return this.rForm.get('country');
  }

  get age() {
    return this.rForm.get('age');
  }

  get gender() {
    return this.rForm.get('gender');
  }

  get phone() {
    return this.rForm.get('phone');
  }
}
