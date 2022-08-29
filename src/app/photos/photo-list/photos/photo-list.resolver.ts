import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

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
    return this.service.listFromUser(userName);
  }
}
