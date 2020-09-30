import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageTextComponent } from './card-image-text.component';
import { LacoCardDetalheModule } from '../laco-card-detalhe/laco-card-detalhe.module';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    CardImageTextComponent
  ],
  imports: [
    CommonModule,
    LacoCardDetalheModule,
    ModalModule
  ],
  exports: [
    CardImageTextComponent
  ]
})
export class CardImageTextModule { }
