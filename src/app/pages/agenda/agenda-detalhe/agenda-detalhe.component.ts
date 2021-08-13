import { CompraVenda } from '../../../shared/compraVenda';
import { IFormCanDeactivate } from './../../../guard/iFormCanDeactivate';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'agenda-detalhe',
  templateUrl: './agenda-detalhe.component.html',
  styleUrls: ['./agenda-detalhe.component.css']
})
export class AgendaDetalheComponent implements OnInit, IFormCanDeactivate {

  diaSelecionado : Date;
  compraVenda: CompraVenda = new CompraVenda();
  listEventDay: any[] = [];
  
  constructor(
    private route : ActivatedRoute,
  ) {
   }

  ngOnInit(): void {
    this.diaSelecionado = this.route.params['date'];
  }

  salvarEvento(){
    this.listEventDay.push(this.compraVenda);
    this.compraVenda = new CompraVenda();
  }

  podeDesativar(){
    if(this.compraVenda.titulo || this.compraVenda.descricao){
      confirm('Tem certeza que deseja sair? Quaisquer alterações não serão salvas.');
    }
    return true;
  }
}
