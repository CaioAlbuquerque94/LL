import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { AgendaRoutingModule } from './agenda.routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgendaCanDeactivateGuard } from 'src/app/guard/agendaguard';
import { ConfirmDialogModule } from 'src/app/shared/confirm-dialog/confirm-dialog.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AgendaComponent,
    AgendaDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgendaRoutingModule,
    ConfirmDialogModule,
    ModalModule
  ],
  providers:[
    AgendaCanDeactivateGuard
  ]
})
export class AgendaModule { }
