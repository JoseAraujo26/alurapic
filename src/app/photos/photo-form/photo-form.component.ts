import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { finalize } from 'rxjs';

import { PhotoService } from '../photo.service';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup
  file!: File
  preview!: string
  percentDone = 0

  constructor(
    private photosService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoForm.controls['description'].value
    const allowComments = this.photoForm.controls['allowComments'].value
    this.photosService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName()])
      }))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / (event.total ?? 1))
        } else if (event instanceof HttpResponse) {
          this.alertService.success('Upload complete', true)
        }
      },
      err => {
        console.log(err)
        this.alertService.danger('Upload error')
      })
  }

  handleFile(file: File) {
    this.file = file
    const fileReader = new FileReader()
    fileReader.onload = event => this.preview = <string>event.target?.result
    fileReader.readAsDataURL(file)
  }
}
