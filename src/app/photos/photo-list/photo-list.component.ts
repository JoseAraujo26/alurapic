import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos } from 'src/app/models/photo.model';

import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhotos[] = []
  filter: string = ''
  hasMore: boolean = true
  currentPage: number = 1
  userName: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params['userName']
      this.photos = this.activatedRoute.snapshot.data['photos']
    })
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = ''
        this.photos = this.photos.concat(photos)
        this.hasMore = photos.length ? true : false
      })
  }
}
