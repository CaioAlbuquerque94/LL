import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';


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
  public readonly API = environment.API;
  // private readonly API = 'http://localhost:3000/item'

  constructor(
    private readonly http: HttpClient,
  ) { }

  public setToken(token){
    return { headers: new HttpHeaders().set('Authorization', 'bearer ' + token) };
  }
  public setConfiguration(configuration: any): void {
    localStorage.setItem('configuration', JSON.stringify(configuration));
  }
  public getConfiguration(): any {
    return JSON.parse(localStorage.getItem('configuration')) != null ? JSON.parse(localStorage.getItem('configuration'))  : null;
  }
  public async logout(token){
    // const response = await this.authService.logout(token.ownerStrategyName).toPromise();
    // if (response) {
      // this.redirectTo('/auth/login');
      // this.nbTokenService.clear();
      localStorage.clear();
    // }
  }

  list (){
    this.testConection().subscribe(data =>{
      console.log(data);
    });
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

  convertDateToYYYYMMDD(date: Date){
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); 
    return date.toISOString().slice(0,10);
  }

  convertStringDateToDate(date: string){
    //para datas "dd-MM-YYYY" ou "dd/MM/YYYY"
    return new Date(date.substr(3,2)+"/"+date.substr(0,2)+"/"+date.substr(6,4));
  }

  converterDateAngularParaStringDateJava(date: Date):string{
    let dia = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    let mes = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    return date.getFullYear()+"/"+mes+"/"+dia;
    //"YYYY/MM/dd"
  }

  getFirstDayOfMonth(date: Date):Date{
    date.setDate(1);
    return date;
  }

  getLastDayOfMonth(date: Date):Date{
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  testConection(){
    return this.http.get(this.API+"/laco/testConection");
  }

  getLacosPaged(first: number, last: number, sortBy: String){
    return this.http.get(this.API+"/laco/getLacosPaged");
  }

  getFirstFile(){
    // return this.http.get(this.API+"/files/?id=2a910247-0392-48be-91f1-9b05a39a2092");
    let params = new HttpParams();
    params = params.append("id","2a910247-0392-48be-91f1-9b05a39a2092");
    return this.http.get(`${this.API}/files/`,{params: params});
  }
  

  upload(file){
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    let baseApiUrl = '';
    return this.http.post(baseApiUrl, formData)
  }
}
