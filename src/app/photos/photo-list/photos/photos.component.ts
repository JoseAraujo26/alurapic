import { Component, Input, OnInit } from '@angular/core';
import { IPhotos } from '../../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: IPhotos[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
