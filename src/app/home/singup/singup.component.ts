import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      fullName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ])],
      userName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-z0-9_\-]+$/),
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ])]
    })
  }

}
