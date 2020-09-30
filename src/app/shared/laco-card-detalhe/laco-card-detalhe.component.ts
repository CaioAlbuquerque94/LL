import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-laco-card-detalhe',
  templateUrl: './laco-card-detalhe.component.html',
  styleUrls: ['./laco-card-detalhe.component.css']
})
export class LacoCardDetalheComponent implements OnInit {

  @Input() obj : { id: any, titulo: string, texto: string, img: string, dataPublicacao: Date };
  constructor() { }

  ngOnInit(): void {
  }

}
