import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  fazerLogin(obj){
    if(obj){
      this.mostrarMenuEmitter.emit(true);
      return true;
    }else{
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
