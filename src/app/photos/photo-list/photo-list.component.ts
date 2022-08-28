import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos, PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhotos[] = []

  constructor(
    private photosService: PhotosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params['userName']
    this.photosService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos)
  }
}
