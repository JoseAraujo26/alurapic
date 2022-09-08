import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  declarations: [ ],
  imports: [
    PhotoListModule,
    PhotoFormModule,
    PhotoModule,
    DarkenOnHoverModule,
    PhotoDetailsModule
  ],
  exports: [ ]
})
export class PhotosModule { }
