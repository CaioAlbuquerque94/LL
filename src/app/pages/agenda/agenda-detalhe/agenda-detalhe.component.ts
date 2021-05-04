import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agenda-detalhe',
  templateUrl: './agenda-detalhe.component.html',
  styleUrls: ['./agenda-detalhe.component.css']
})
export class AgendaDetalheComponent implements OnInit {

  diaSelecionado : Date;
  
  constructor() { }

  ngOnInit(): void {
  }

}
