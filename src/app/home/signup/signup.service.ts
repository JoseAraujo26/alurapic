import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateUser } from 'src/app/models/create-user.model';
import { environment } from 'src/environments/environment';

const api = environment.ApiUrl

@Injectable()
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserNameTaken(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${api}/user/exists/${userName}`)
  }

  signUp(newUser: ICreateUser) {
    return this.http.post(`${api}/user/signup/`, newUser)
  }
}
