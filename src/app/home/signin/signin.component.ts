import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngAfterViewInit() {
    this.plataformDetectorService.isPlataformBrowser() &&
    this.userNameInput.nativeElement.focus()
  }

  login() {
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authService
      .authenticate(userName, password)
      .subscribe({
        next: () => {
          this.router.navigate([`user`, userName])
        },
        error: error => {
          console.log(error)
          this.loginForm.reset()
          this.plataformDetectorService.isPlataformBrowser() &&
          this.userNameInput.nativeElement.focus()
        }
      })
  }

}
