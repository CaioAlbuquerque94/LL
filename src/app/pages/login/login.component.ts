import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm : FormGroup;
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
    if(this.authForm.valid){
      console.log("VALIDO");
      this.authservice.fazerLogin(this.authForm.getRawValue());
      this.router.navigateByUrl("/");
    }else{
      console.log("INVALIDO");
    }
  }
}
