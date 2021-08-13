import { AgendaCanDeactivateGuard } from './../../guard/agendaguard';
import { AuthGuard } from './../../guard/authguard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaDetalheComponent } from './agenda-detalhe/agenda-detalhe.component';
import { AgendaComponent } from './agenda.component';


export const agendaRoutes: Routes = [
  { path : '' , component: AgendaComponent, 
    canDeactivate: [AgendaCanDeactivateGuard],
    canActivateChild:[AuthGuard],
    children: [
        { path : ':date' , component: AgendaDetalheComponent, canDeactivate: [AgendaCanDeactivateGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(agendaRoutes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
