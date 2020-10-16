import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  list2: any = [0, 1];
  list3: any = [0, 1, 2];
  list4: any = [0, 1, 2, 3];
  list5: any = [0, 1, 2, 3, 4];
  list6: any = [0, 1, 2, 3, 4, 5];
  list7: any = [0, 1, 2, 3, 4, 5, 6];
  list8: any = [0, 1, 2, 3, 4, 5, 6, 7];
  list10: any = [0, 1, 2, 3, 4, 5, 6, 8, 9];
  col_resposive : string = "col-xl-3 col-lg-4 col-md-6 col-12";
  private readonly API = environment.API
  // private readonly API = 'http://localhost:3000/item'

  // cardObj : any = {
  //   id : 0,
  //   img : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
  //   texto : "Texto de teste",
  //   titulo : "Titulo teste",
  //   dataPublicacao : new Date()
  // }

  constructor(
    private readonly http: HttpClient,
  ) { }

  list (){
    // return this.http.get(this.API+"item");
   return [
      {"id" : 1, "img" : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
        "texto" : "Texto de teste", "titulo" : "Titulo teste", "dataPublicacao" : null},
      {"id" : 2, "img" : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
        "texto" : "Texto de teste", "titulo" : "Titulo teste", "dataPublicacao" : null},
      {"id" : 3, "img" : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
        "texto" : "Texto de teste", "titulo" : "Titulo teste", "dataPublicacao" : null},
      {"id" : 4, "img" : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
        "texto" : "Texto de teste", "titulo" : "Titulo teste", "dataPublicacao" : null},
      {"id" : 5, "img" : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
        "texto" : "Texto de teste", "titulo" : "Titulo teste", "dataPublicacao" : null}
  ]
  }

}
