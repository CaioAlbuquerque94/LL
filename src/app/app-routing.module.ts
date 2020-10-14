import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { HomeComponent } from './pages/home/home.component';
import { LacoCardDetalheComponent } from './shared/laco-card-detalhe/laco-card-detalhe.component';


export const routes: Routes = [
  { path : 'album' , component: AlbumComponent },
  { path : 'album/:id' , component: AlbumComponent },
  {
    path: '', component: HomeComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
