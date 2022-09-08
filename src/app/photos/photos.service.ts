import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private api = 'http://localhost:3000'
  photos: IPhotos[] = []

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<IPhotos[]>(`${this.api}/${userName}/photos`)
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())
    console.log(params)
    return this.http.get<IPhotos[]>(`${this.api}/${userName}/photos`, { params })
  }

  upload(description: string, allowComments: string, file: File) {
    const formData = new FormData
    formData.append('description', description)
    formData.append('allowComments', allowComments ? 'true' : 'false')
    formData.append('imageFile', file)
    console.log('formData', formData)
    return this.http.post(`${this.api}/photos/upload`, formData)
  }

  findById(id: string) {
    return this.http.get<IPhotos>(`${this.api}/photos/${id}`)
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
