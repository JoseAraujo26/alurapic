import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

import { IPhotos } from 'src/app/models/photo.model';

@Directive({
  selector: '[appPhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto!: IPhotos

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userSerivce: UserService
  ) { }

  ngOnInit() {
    this.userSerivce
      .getUser()
      .subscribe(user => {
        if (!user || user?.id !== this.ownedPhoto.userId) {
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
        }
      })
  }

}
