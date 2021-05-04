import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { AgendaRoutingModule } from './agenda.routing.module';



@NgModule({
  declarations: [
    AgendaComponent,
    AgendaDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgendaRoutingModule
  ],
  providers:[
  ]
})
export class AgendaModule { }
