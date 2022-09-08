import { Component, Input } from '@angular/core';

const cloud = 'http://localhost:3000/imgs'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  private _url = ''

  @Input() title: string | undefined = ''
  @Input() set url (url: string | undefined) {
    this._url = url?.startsWith('data') ? url : `${cloud}/${url}`
  }

  get url () {
    return this._url
  }

  constructor() { }

}
