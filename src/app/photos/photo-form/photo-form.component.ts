import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup
  file!: File
  preview!: string

  constructor(
    private photosService: PhotosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoForm.controls['file'].value
    const allowComments = this.photoForm.controls['allowComments'].value
    this.photosService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']))
  }

  handleFile(file: File) {
    this.file = file
    const fileReader = new FileReader()
    fileReader.onload = event => this.preview = <string>event.target?.result
    fileReader.readAsDataURL(file)
  }
}
