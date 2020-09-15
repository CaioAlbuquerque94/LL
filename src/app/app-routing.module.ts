import { AlbumComponent } from './pages/album/album.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotListComponent } from './pages/home/hot-list/hot-list.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
         path: 'album', component: HotListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
