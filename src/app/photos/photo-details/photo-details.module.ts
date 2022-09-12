import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

import { PhotoModule } from '../photo/photo.module';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    PhotoModule,
    VmessageModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    PhotoDetailsComponent
  ]
})
export class PhotoDetailsModule { }
