import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CardImageTextModule } from 'src/app/shared/card-image-text/card-image-text.module';

@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    CardImageTextModule,
    ModalModule.forRoot()
  ]
})
export class AlbumModule { }
