import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localept from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './pages/album/album.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ConfirmDialogModule } from './shared/confirm-dialog/confirm-dialog.module';

registerLocaleData(localept, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    AlbumModule,
    HttpClientModule,
    LoginModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ConfirmDialogModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
