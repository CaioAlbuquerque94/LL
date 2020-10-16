import { Component } from '@angular/core';
import { UtilService } from './services/util.service';

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
  constructor(
    public util: UtilService
  ) { 
    this.bigScreen = (document.documentElement.clientWidth >= 1440);
  }

  fixedSideBar() {
    this.isFixedOpenCloseNav = !this.isFixedOpenCloseNav;
    if (this.isFixedOpenCloseNav) {
      document.getElementById('main').style.marginLeft = '250px';
    } else {
      document.getElementById('main').style.marginLeft = '50px';
    }
  }
  openCloseNav() {
    // if (!this.isFixedOpenCloseNav) {
    //   this.isOpenCloseNav = !this.isOpenCloseNav;
    //   if (this.isOpenCloseNav) {
    //     document.getElementById('mySidebar').style.left = '0px';
    //   } else {
    //     document.getElementById('mySidebar').style.left = '-200px';
    //   }
    // }
  }
  addNewPost(){
    console.log("Adding new Post");
  }
}
