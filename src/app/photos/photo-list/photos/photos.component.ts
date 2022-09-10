import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { IPhotos } from 'src/app/models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: IPhotos[] = []
  rows: any[] = []

  constructor() { }

  ngOnChanges(change: SimpleChanges): void {
    if (change['photos'])
      this.rows = this.groupColumns(this.photos)
  }

  groupColumns(photos: IPhotos[]) {
    const newRows: any[] = []

    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3))
    }

    return newRows
  }
}
