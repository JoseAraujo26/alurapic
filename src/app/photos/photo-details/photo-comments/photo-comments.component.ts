import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, switchMap, tap } from 'rxjs';

import { IPhotoComment } from 'src/app/models/photo-comment.model';

import { PhotoService } from '../../photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId!: number;

  commentForm!: FormGroup;
  comments$!: Observable<IPhotoComment[]>

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId)
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }

  save() {
    const comment = this.commentForm.controls['comment'].value as string
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset()
      }))
  }

}
