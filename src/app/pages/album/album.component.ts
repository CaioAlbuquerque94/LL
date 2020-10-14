import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @ViewChild("modalAddCard") public modalAddCard: ModalDirective;
  item$ : Observable<any>;
  constructor(
    public util : UtilService
  ) { }

  ngOnInit(): void {
    // console.log(this.util.list());
    this.util.list()
      .subscribe(console.log);
    // this.item$ = this.util.list();
    // console.log(this.item$);
    
  }

}
