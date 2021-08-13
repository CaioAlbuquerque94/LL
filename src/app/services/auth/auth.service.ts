import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from '../util/util.service';
import { Usuario } from './../../shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  usuarioAutenticadoEmitter = new EventEmitter<Usuario>();
  usuarioAutenticado: boolean = false;
  

  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private utilService: UtilService
  ) { }

  fazerLogin(usuario : Usuario){
    let params = new HttpParams();
    params = params.append("senha", usuario.senha);
    params = params.append("email", usuario.email);
    return this.http.get(this.utilService.API+"/user/login",{params:params});
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
