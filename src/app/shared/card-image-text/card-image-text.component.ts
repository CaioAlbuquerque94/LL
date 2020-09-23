import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image-text',
  templateUrl: './card-image-text.component.html',
  styleUrls: ['./card-image-text.component.css']
})
export class CardImageTextComponent implements OnInit {

  @Input() obj : { titulo: string, texto: string, img: string, dataPublicacao: Date };
  constructor() { }

  ngOnInit(): void {
    this.obj.dataPublicacao = new Date();
  }

}
