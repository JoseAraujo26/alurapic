import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validators';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { UserNotTakenValidatorService } from './user-not-taken-validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidator: UserNotTakenValidatorService,
    private singupSerice: SingupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const checkUserNameTaken = this.userNotTakenValidator.checkUserNameTaken()
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      userName:
        ['', [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
          checkUserNameTaken
        ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    })
  }

  singUp() {
    const newUser = this.signupForm.getRawValue() as NewUser
    this.singupSerice
      .singUp(newUser)
      .subscribe(
        () => this.router.navigate([''])
      )
  }
}
