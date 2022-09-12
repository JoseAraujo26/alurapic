import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { PhotoService } from '../photo.service';

import { IPhotos } from 'src/app/models/photo.model';
import { IPhotoComment } from 'src/app/models/photo-comment.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<IPhotos>
  comments$!: Observable<IPhotoComment[]>
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId']
    this.photo$ = this.photosService.findById(this.photoId)
  }

  remove() {
    this.photosService
      .removePhoto(this.photoId)
      .subscribe(() => this.router.navigate(['']))
  }
}
