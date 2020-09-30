import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LacoCardDetalheComponent } from './laco-card-detalhe.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [LacoCardDetalheComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    LacoCardDetalheComponent
  ]
})
export class LacoCardDetalheModule { }
