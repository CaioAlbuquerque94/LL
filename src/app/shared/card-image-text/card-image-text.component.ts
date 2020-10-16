import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card-image-text',
  templateUrl: './card-image-text.component.html',
  styleUrls: ['./card-image-text.component.css']
})
export class CardImageTextComponent implements OnInit {

  @Input() obj : { id: any, titulo: string, texto: string, img: string, dataPublicacao: Date };
  @ViewChild("modalLacoCardDetalhe") modalLacoCardDetalhe: ModalDirective;
  constructor() { }

  ngOnInit(): void {
  }

  cardCLicked(obj){
    this.modalLacoCardDetalhe.show();
  }
}
