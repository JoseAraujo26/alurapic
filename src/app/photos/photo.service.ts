import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto as IPhoto } from '../models/photo.model';
import { IPhotoComment } from '../models/photo-comment.model';
import { catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private api = environment.ApiUrl
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

  findById(photoId: number) {
    return this.http.get<IPhoto>(`${this.api}/photos/${photoId}`)
  }

  getComments(photoId: number) {
    return this.http.get<IPhotoComment[]>(`${this.api}/photos/${photoId}/comments`)
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post<IPhotoComment[]>(`${this.api}/photos/${photoId}/comments`, {
      commentText
    })
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${this.api}/photos/${photoId}`)
  }

  like(photoId: number) {
    return this.http
      .post(`${this.api}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status === '304' ? of(false) : throwError(() => new Error(err))
      }))
  }
}
