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

  fixedSideBar() {
    this.isFixedOpenCloseNav = !this.isFixedOpenCloseNav;
    if (this.isFixedOpenCloseNav) {
      document.getElementById('main').style.marginLeft = '230px';
    } else {
      document.getElementById('main').style.marginLeft = '30px';
    }
  }
  openCloseNav() {
    if (!this.isFixedOpenCloseNav) {
      this.isOpenCloseNav = !this.isOpenCloseNav;
      if (this.isOpenCloseNav) {
        document.getElementById('mySidebar').style.left = '0px';
      } else {
        document.getElementById('mySidebar').style.left = '-200px';
      }
    }
  }
}
