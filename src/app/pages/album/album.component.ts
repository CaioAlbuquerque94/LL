import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedItem : any;
  constructor(
    private route : ActivatedRoute,
    public util : UtilService,
  ) { }

  ngOnInit(): void {
    // this.util.list().subscribe(console.log);
    this.selectedItem = this.route.snapshot.params.id;//metodo mais rapido do que fazer uma subscrição
  }

}
