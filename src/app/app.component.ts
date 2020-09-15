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

  constructor(
    public util: UtilService
  ) { }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById('mySidebar').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidebar').style.width = "50px";
    document.getElementById('main').style.marginLeft = "0";
  }
  fixedSideBar() {
    this.isFixedOpenCloseNav = !this.isFixedOpenCloseNav;
  }
  openCloseNav(param) {
    // this.isFixedOpenCloseNav =  param === 'fixed' ? true : false;
    // if (param === 'fixed') {
    //   this.isFixedOpenCloseNav = !this.isFixedOpenCloseNav;
    // }
    if (!this.isFixedOpenCloseNav) {
      this.isOpenCloseNav = !this.isOpenCloseNav;
      if (this.isOpenCloseNav) {
        document.getElementById('mySidebar').style.left = "0px"
        document.getElementById('main').style.marginLeft = "230px";
      } else {
        document.getElementById('mySidebar').style.left = "-200px";
        document.getElementById('main').style.marginLeft = "30px";
      }
    }
  }
}
