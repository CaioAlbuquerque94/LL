import { Router } from '@angular/router';
import { AgendaService } from './agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  diaSelecionado: Date;
  constructor(
    private agendaService: AgendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getDiaSelecionado(){
    console.log(typeof(this.agendaService.getDayofAgenda(this.diaSelecionado)));
    this.router.navigate(['/agenda',this.diaSelecionado]);
  }

}
