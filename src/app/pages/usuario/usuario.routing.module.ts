import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../guard/authguard';
import { UsuarioConfigComponent } from './usuario-config/usuario-config.component';



export const usuarioRoutes: Routes = [
  { path : '' , component: UsuarioConfigComponent, 
    // canDeactivate: [AgendaCanDeactivateGuard],
    canActivateChild:[AuthGuard],
    children: [
        { path : '/config/:id' , component: UsuarioConfigComponent, 
          // canDeactivate: [AgendaCanDeactivateGuard] 
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
