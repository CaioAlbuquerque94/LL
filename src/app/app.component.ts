import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';
import { UtilService } from './services/util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lane-lacos';
  isOpenCloseNav = false;
  isFixedOpenCloseNav = false;
  myContainer = document.getElementById('mySidebar') as HTMLInputElement;
  laco_transparente_pequeno : any = "https://github.com/CaioAlbuquerque94/lane-lacos/blob/master/src/_images/laco_transparente_pequeno.png?raw=true";
  bigScreen: boolean = false;
  smallScreen: boolean = false;
  mostrarMenu : boolean = false;
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

  addNewPost(){
    console.log("Adding new Post");
  }
}
