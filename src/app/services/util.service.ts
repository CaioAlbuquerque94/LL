import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../pages/album/item';


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
  constructor(
    private readonly http: HttpClient,
  ) { }

  list (){
    return this.http.get<Item[]>(this.API+"item");
  }


}
