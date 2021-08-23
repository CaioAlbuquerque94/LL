import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './../../shared/usuario';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  usuario: Usuario = new Usuario();
  hasError: boolean = false;
  carregando: boolean = false;
  mensagemRetorno: string = '';

  constructor(
    private authservice : AuthService,
    private formBuilder: FormBuilder,
    private router : Router
  ) { 
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: [null, Validators.required]
    })

  }

  ngOnInit(): void {
  }

  fazerlogin(){
    this.hasError = false;
    this.carregando = true;
    this.mensagemRetorno = "";
    if(this.authForm.valid){
      this.usuario.email = this.authForm.value.login;
      this.usuario.senha = this.authForm.value.password;
      this.authservice.fazerLogin(this.usuario).subscribe(data=>{
        if(data){
          this.authservice.mostrarMenuEmitter.emit(true);
          this.authservice.usuarioAutenticado = true;
          this.authservice.usuarioAutenticadoEmitter.emit(this.usuario);
          this.router.navigateByUrl("/agenda");
        }else{
          this.hasError = true;
          this.authservice.usuarioAutenticado = false;
          this.authservice.mostrarMenuEmitter.emit(false);
          this.mensagemRetorno = "Algo deu errado. Verifique o usuário e a senha.";
        }
      },error =>{
        this.hasError = true;
        this.authservice.usuarioAutenticado = false;
        this.authservice.mostrarMenuEmitter.emit(false);
        this.mensagemRetorno = "Algo deu errado. Verifique o usuário e a senha.";
      }, ()=>{
        this.carregando = true;
      });
    }else{
      this.hasError = true;
      this.mensagemRetorno = "Insira um email e senha.";
    }
  }
}
