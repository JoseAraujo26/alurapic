import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';

import { FilterByDescriptionPipe } from './photos/filter-by-description.pipe';

import { CardModule } from 'src/app/shared/components/card/card.module';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [
    LoadButtonComponent,
    PhotosComponent,
    PhotoListComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    RouterModule
  ]
})
export class PhotoListModule { }
