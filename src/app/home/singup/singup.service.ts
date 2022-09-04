import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserNameTaken(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/user/exists/${userName}`)
  }

  singUp(newUser: NewUser) {
    return this.http.post(`${API_URL}/user/signup/`, newUser)
  }
}
