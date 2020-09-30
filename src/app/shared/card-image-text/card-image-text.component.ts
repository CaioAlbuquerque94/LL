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
  clicked :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cardCLicked(obj){
    console.log(obj);
    this.clicked = !this.clicked;
    this.modalLacoCardDetalhe.show();
  }
}
