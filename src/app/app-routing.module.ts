import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/authguard';
import { AlbumComponent } from './pages/album/album.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';


export const routes: Routes = [
  
  { path : 'login', component: LoginComponent },

  { path : 'album' , component: AlbumComponent, 
    canActivateChild: [AuthGuard],
    children : [
      { path : ':id' , component: AlbumComponent},
    ]
  },

  { path : 'agenda' , 
    canLoad: [AuthGuard], 
    loadChildren: () => import('./pages/agenda/agenda.module').then(m => m.AgendaModule)
  },

  { path : 'usuario' , 
    canLoad: [AuthGuard], 
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)
  },

  { path : '', component: HomeComponent },

  
  { path : '**', component: PaginaNaoEncontradaComponent },
  // { path : '**', redirectTo:'' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
