import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$: Observable<IUser | null>

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser()
  }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }
}
