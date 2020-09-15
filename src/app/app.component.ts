import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lane-lacos';
  isOpenCloseNav = false;
  myContainer = document.getElementById('mySidebar') as HTMLInputElement;

  toggleSideBarr(){
    console.log("BVAS");
    // ('#sidebar').toggleClass('active');
    this.myContainer.toggleAttribute('active');
  }
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
  openCloseNav() {
    this.isOpenCloseNav = !this.isOpenCloseNav;
    if (this.isOpenCloseNav) {
      document.getElementById('mySidebar').style.width = "250px";
      document.getElementById('main').style.marginLeft = "250px";
    } else {
      document.getElementById('mySidebar').style.width = "50px";
      document.getElementById('main').style.marginLeft = "0";
    }
  }
}
