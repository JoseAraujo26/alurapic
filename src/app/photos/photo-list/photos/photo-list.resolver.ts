import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from 'src/app/models/photo.model';

import { PhotoService } from '../../photo.service';

@Injectable({
  providedIn: 'root'
})

export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {

  constructor (
    private service: PhotoService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhoto[]> {
    const userName = route.params['userName']
    return this.service.listFromUserPaginated(userName, 1);
  }
}
