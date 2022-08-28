import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: IPhotos[] = []

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<IPhotos[]>(`http://localhost:3000/${userName}/photos`)
  }
}

export interface IPhotos {
  allowComments: boolean
  comments: number
  description: string
  id: number
  likes: number
  postDate: Date
  url: string
  userId: number
}
