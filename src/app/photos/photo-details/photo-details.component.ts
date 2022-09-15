import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { PhotoService } from '../photo.service';

import { IPhoto } from 'src/app/models/photo.model';
import { IPhotoComment } from 'src/app/models/photo-comment.model';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<IPhoto>
  comments$!: Observable<IPhotoComment[]>
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId']
    this.photo$ = this.photosService.findById(this.photoId)
    this.photo$.subscribe(() => {}, err => {
      console.log(err)
      this.router.navigate(['not-found'])
    })
  }

  remove() {
    this.photosService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo removed!')
          this.router.navigate(['/user', this.userService.getUserName()])
        },
        err => {
            console.log(err)
            this.alertService.warning('Could not delete the photo!')
        }
      )
  }

  like(photo: IPhoto) {
    this.photosService
      .like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photosService.findById(photo.id)
        }
      })
  }

}
