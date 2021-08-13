import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioConfigComponent } from './usuario-config/usuario-config.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { InputLlModule } from 'src/app/shared/input-ll/input-ll.module';


@NgModule({
  declarations: [
    UsuarioConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    InputLlModule
  ]
})
export class UsuarioModule { }
