import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LacoCardDetalheComponent } from './laco-card-detalhe.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';



@NgModule({
  declarations: [LacoCardDetalheComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    ModalModule.forRoot()
  ],
  exports: [
    LacoCardDetalheComponent
  ]
})
export class LacoCardDetalheModule { }
