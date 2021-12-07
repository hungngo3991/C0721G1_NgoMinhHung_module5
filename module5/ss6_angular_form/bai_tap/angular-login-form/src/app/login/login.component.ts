import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(lForm: FormGroup) {
    console.log(lForm.value);
  }

  get email() {
    return this.lForm.get('email');
  }

  get password() {
    return this.lForm.get('password');
  }

}
