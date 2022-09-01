import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY: string = 'authToken'

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken()
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.KEY, token)
  }

  getToken(): string | null {
    return window.localStorage.getItem(this.KEY)
  }

  removeToken(): void {
    window.localStorage.removeItem(this.KEY)
  }
}
