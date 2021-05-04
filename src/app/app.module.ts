import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumModule } from './pages/album/album.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
// import { AuthService } from './services/auth/auth.service';
// import { AgendaModule } from './pages/agenda/agenda.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AlbumModule,
    HttpClientModule,
    LoginModule,
    // AgendaModule
  ],
  providers: [
    // AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
