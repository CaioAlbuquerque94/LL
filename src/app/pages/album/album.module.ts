import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class AlbumModule { }
