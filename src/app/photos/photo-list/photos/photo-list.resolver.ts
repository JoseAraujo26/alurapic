import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { IPhotos, PhotosService } from '../../photos.service';

@Injectable({
  providedIn: 'root'
})

export class PhotoListResolver implements Resolve<Observable<IPhotos[]>> {

  constructor (
    private service: PhotosService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhotos[]> {
    const userName = route.params['userName']
    return this.service.listFromUserPaginated(userName, 1);
  }
}
