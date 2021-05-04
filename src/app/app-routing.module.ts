import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'login', component: LoginComponent },

  { path : 'album' , component: AlbumComponent },
  { path : 'album/:id' , component: AlbumComponent },

  { path : 'agenda' , loadChildren: () => import('./pages/agenda/agenda.module').then(m => m.AgendaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
