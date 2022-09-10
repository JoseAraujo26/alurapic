import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser } from 'src/app/models/create-user';

const API_URL = 'http://localhost:3000'

@Injectable()
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserNameTaken(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/user/exists/${userName}`)
  }

  signUp(newUser: ICreateUser) {
    return this.http.post(`${API_URL}/user/signup/`, newUser)
  }
}
