import { Usuario } from './../../../shared/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuario-config',
  templateUrl: './usuario-config.component.html',
  styleUrls: ['./usuario-config.component.css']
})
export class UsuarioConfigComponent implements OnInit {

  usuarioLogado: Usuario = new Usuario();
  // {
  //   nome: 'Caio',
  //   senha: 'admin',
  //   email: 'email@email.com'
  // }
  teste: any = "a";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form.value);
  }
  
}
