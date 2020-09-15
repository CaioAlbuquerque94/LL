import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AlbumComponent } from './pages/album/album.component';
import { MatIconModule } from '@angular/material/icon';
import { HotListComponent } from './pages/home/hot-list/hot-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    HotListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
