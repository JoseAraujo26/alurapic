import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhotos } from 'src/app/models/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<IPhotos>

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['photoId']
    this.photo$ = this.photosService.findById(id)
  }
}
