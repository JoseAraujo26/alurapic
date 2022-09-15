import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  private _url!: string

  @Input() title!: string
  @Input() set url (url: string) {
    this._url = url?.startsWith('data') ? url : `${environment.ApiUrl}/imgs/${url}`
  }

  get url () {
    return this._url
  }

  constructor() { }

}
