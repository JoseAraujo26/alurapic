import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhotos as IPhoto } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private api = 'http://localhost:3000'
  photos: IPhoto[] = []

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<IPhoto[]>(`${this.api}/${userName}/photos`)
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString())
    console.log(params)
    return this.http.get<IPhoto[]>(`${this.api}/${userName}/photos`, { params })
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
    return this.http.get<IPhoto>(`${this.api}/photos/${id}`)
  }
}
