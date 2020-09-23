import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';
import { HotListComponent } from './hot-list/hot-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  col_resposive : string = "col-xl-3 col-lg-4 col-md-6 col-12";
  cardObj : any = {
    img : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
    texto : "Texto de teste",
    titulo : "Titulo teste",
    dataPublicacao : new Date()
  }
  newestList : any = [];

  constructor(
    public util : UtilService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.newestList.push(this.cardObj);
    }
  }

}
