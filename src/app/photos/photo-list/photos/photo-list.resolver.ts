import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPhotos } from 'src/app/models/photo';

import { PhotoService } from '../../photo.service';

@Injectable({
  providedIn: 'root'
})

export class PhotoListResolver implements Resolve<Observable<IPhotos[]>> {

  constructor (
    private service: PhotoService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhotos[]> {
    const userName = route.params['userName']
    return this.service.listFromUserPaginated(userName, 1);
  }
}
