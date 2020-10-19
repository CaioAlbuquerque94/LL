import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @ViewChild("modalAddCard") public modalAddCard: ModalDirective;
  item$ : Observable<any>;
  selectedItem : any;
  inscricao : Subscription;
  inscricao2 : Subscription;
  bookList : any;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public util : UtilService,
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.util.list().subscribe(data => {
    //   if(data){
    //     this.bookList = data;
    //     for (const items of this.bookList) {
    //       items.dataPublicacao = new Date();
    //     }
    //     this.inscricao2 = this.route.params.subscribe(params => {
    //       this.selectedItem = params.id;
    //       if(this.selectedItem){
    //           let res = this.getItem(this.selectedItem);
    //           if(res)
    //             console.log(res);
    //           else
    //             this.router.navigate(['/album']); 
    //       }else{
    //         this.router.navigate(['/album']);
    //       }
    //     });
    //   }else{
    //     this.bookList = [];
    //   }
    // });
    let data = this.util.list();
    if(data){
      this.bookList = data;
      for (const items of this.bookList) {
        items.dataPublicacao = new Date();
      }
      this.inscricao2 = this.route.params.subscribe(params => {
        this.selectedItem = params.id;
        if(this.selectedItem){
            let res = this.getItem(this.selectedItem);
            if(res)
              console.log(res);
            else
              this.router.navigate(['/album']); 
        }else{
          this.router.navigate(['/album']);
        }
      });
    }else{
      this.bookList = [];
    }
    
  }

  ngOnDestroy(): void {
    // this.inscricao.unsubscribe();//lembrar de substituir por take(1)
    // this.inscricao2.unsubscribe();
  }

  getItem(id:number){
    for (const item of this.bookList) {
      if(item.id == id){
        return item;
      }
    }
    return null;
  }
}
