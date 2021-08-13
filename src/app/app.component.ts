import { error } from '@angular/compiler/src/util';
import { Component, DoCheck } from '@angular/core';

import { AuthService } from './services/auth/auth.service';
import { UtilService } from './services/util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title: string = 'lane-lacos';
  isOpenCloseNav: boolean = false;
  isFixedOpenCloseNav: boolean = false;
  myContainer = document.getElementById('mySidebar') as HTMLInputElement;
  laco_transparente_pequeno: string = "https://github.com/CaioAlbuquerque94/lane-lacos/blob/master/src/_images/laco_transparente_pequeno.png?raw=true";
  bigScreen: boolean = false;
  smallScreen: boolean = false;
  mostrarMenu: boolean = false;
  online: string = '#ad2121';
  checkIsOnline: boolean = true;

  constructor(
    public util: UtilService,
    private authService : AuthService,
  ) { 
    this.bigScreen = (document.documentElement.clientWidth >= 1440);
    this.smallScreen = (document.documentElement.clientWidth <= 440);
    this.authService.mostrarMenuEmitter.subscribe(data=>{
      this.mostrarMenu = data;
    });
  }
  
  ngDoCheck(): void {
    if(this.checkIsOnline){
      this.util.testConection().subscribe(data=>{
        if(data){
          this.online = '#28a745';
        }
      },error =>{
        this.online = '#ad2121';
      })
      this.checkIsOnline = false;
      setTimeout(() => {
        this.checkIsOnline = true;
      }, 60000);
    }
  }

  addNewPost(){
    console.log("Adding new Post");
  }
}
