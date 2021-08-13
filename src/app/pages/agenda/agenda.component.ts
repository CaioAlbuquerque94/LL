import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth, parseISO } from 'date-fns';
import _ from 'lodash';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { UtilService } from 'src/app/services/util/util.service';

import { CompraVenda } from '../../shared/compraVenda';
import { IFormCanDeactivate } from './../../guard/iFormCanDeactivate';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit, IFormCanDeactivate {

  @ViewChild("modalConfirmDialog") public modalConfirmDialog: ModalDirective;

  diaSelecionado: any = new Date();
  carregando: boolean = true;
  carregandoDia: boolean = false;

  tiposEventos: any[] = [{tipo: 'compra', descricao: 'Compra'}, {tipo: 'venda', descricao: 'Venda'}, {tipo: 'info', descricao: 'Informação'}]
  compraVendaForm: CompraVenda = new CompraVenda();
  compraVendaSelecionado: CompraVenda = null;
  calendarEventSelecionado: CalendarEvent = null;

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  refresh: Subject<any> = new Subject();//nao utilizado ainda
  showConfirm: boolean = false;
  tipoDialog: string = "delete";

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Deleted', event);
      },
    },
  ];

  listaCompraVenda: CalendarEvent[] = [];
  mensagemErro: string = '';
  hasError: boolean = false;

  constructor(
    private agendaService: AgendaService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.diaSelecionado = this.utilService.convertDateToYYYYMMDD(new Date());
    this.compraVendaForm.tipo = this.tiposEventos[0].tipo;
  }

  ngOnInit(): void {
    this.carregando = true;
    this.agendaService.getEventsOfMonth(new Date()).subscribe((data:CompraVenda[])=>{
      let listEvents: CalendarEvent[] = [{
        start: new Date(),
        title: 'An event with no end date',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        actions: [],
      }]
      data.forEach((compraVenda:CompraVenda) => {
        // listEvents.push({
        //   id: compraVenda.id,
        //   start: new Date(this.utilService.convertStringDateToDate(compraVenda.dataEvento)),
        //   title: compraVenda.titulo,
        //   color: compraVenda.tipo == "compra" ? this.colors.red : compraVenda.tipo == "venda" ? this.colors.blue : this.colors.yellow,
        //   actions: this.actions,
        //   draggable: true,
        //   resizable: {
        //     beforeStart: true,
        //     afterEnd: true,
        //   },
        //   meta: {descricao: compraVenda.descricao, valor: compraVenda.valor}
        // })
        let newEvent = this.agendaService.convertCompraVendaToCalendarEvent(compraVenda);
        newEvent.actions = this.actions;
        listEvents.push(newEvent);
      })
      this.carregando = false;
      this.listaCompraVenda = listEvents;
    });

      //EXEMPLO DE LIDAR COM RETORNO PAGINADO
    // this.agendaService.getEventsPaged().subscribe((data:Pagell)=>{
    //   let listEvents: CalendarEvent[] = [{
    //     start: new Date(),
    //     title: 'An event with no end date',
    //     color: { primary: '#ad2121', secondary: '#FAE3E3' },
    //     actions: [],
    //   }]
    //   data.content.forEach((compraVenda:CompraVenda) => {
    //     listEvents.push({
    //       id: compraVenda.id,
    //       start: new Date(this.utilService.convertStringDateToDate(compraVenda.dataEvento)),
    //       title: compraVenda.titulo,
    //       color: compraVenda.tipo == "compra" ? this.colors.red : compraVenda.tipo == "venda" ? this.colors.blue : this.colors.yellow,
    //       actions: this.actions,
    //       draggable: true,
    //       resizable: {
    //         beforeStart: true,
    //         afterEnd: true,
    //       },
    //       meta: {descricao: compraVenda.descricao, valor: compraVenda.valor}
    //     })
    //   });
    //   this.carregando = false;
    //   this.listaCompraVenda = listEvents;
    // });

  }

  podeDesativar(){
    if(this.compraVendaForm.titulo || this.compraVendaForm.descricao){
      confirm('Tem certeza que deseja sair? Quaisquer alterações não serão salvas.');
    }
    return true;
  }

  getDiaSelecionado(){
    // this.agendaService.getDayofAgenda(this.diaSelecionado).subscribe(arg => this.property = arg);
    // this.carregandoDia = true;
    // this.agendaService.getDayofAgenda(this.diaSelecionado);
    // setTimeout(() => {
    //   this.router.navigate(['/agenda',this.diaSelecionado]);
    //   this.carregandoDia = false;
    // }, 2000);
    this.viewDate=parseISO(this.diaSelecionado+'');
    this.activeDayIsOpen = false;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.calendarEventSelecionado = event;
    this.compraVendaSelecionado = this.agendaService.convertCalendarEventToCompraVenda(event);
    switch (action) {
      case "Edited":
        

        // this.agendaService.editCompraVenda(compraVenda).subscribe(data =>{
        //   if(data){
        //     for (let i = 0; i < this.listaCompraVenda.length; i++) {
        //       if(this.listaCompraVenda[i].id == compraVenda.id){
        //         this.listaCompraVenda[i] = this.agendaService.convertCompraVendaToCalendarEvent(compraVenda);
        //         break;
        //       }
        //     }
        //   }
        // });
        break;

      case "Deleted":
        this.showConfirm = true;
        this.tipoDialog = "delete";
        break;
      
      default:
        // this.agendaService.editCompraVenda(compraVenda).subscribe(data =>{
        //   if(data){
        //     for (let i = 0; i < this.listaCompraVenda.length; i++) {
        //       if(this.listaCompraVenda[i].id == compraVenda.id){
        //         this.listaCompraVenda[i] = this.agendaService.convertCompraVendaToCalendarEvent(compraVenda);
        //         break;
        //       }
        //     }
        //   }
        // });
        break;
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    for (let i = 0; i < this.listaCompraVenda.length; i++) {
      if(this.listaCompraVenda[i].id == event.id){
        if(this.listaCompraVenda[i].start.toISOString() != newStart.toISOString()){
          let newEvent: CalendarEvent = _.cloneDeep(event);
          newEvent.start = newStart;
          newEvent.end = newEnd;
          let compraVenda: CompraVenda = this.agendaService.convertCalendarEventToCompraVenda(newEvent);
          this.agendaService.editCompraVenda(compraVenda).subscribe(data =>{
            if(data){
              this.listaCompraVenda = this.listaCompraVenda.map((iEvent) => {
                if (iEvent === event) {
                  return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                  };
                }
                return iEvent;
              });
            }
          })
        }
        break
      }
    }
  }
  
  teste(){
    this.showConfirm = true;
    // this.modalConfirmDialog.show();
  }

  salvarEvento(){
    this.hasError = false;
    this.mensagemErro = '';
    if(this.compraVendaForm.titulo && this.compraVendaForm.descricao && this.diaSelecionado){
      this.compraVendaForm.dataEvento = new DatePipe('en-US').transform(this.diaSelecionado, 'dd/MM/yyyy');//this.datepipe.transform(this.diaSelecionado, 'dd/MM/yyyy');
      this.carregando = true;
      this.agendaService.addCompraVenda(this.compraVendaForm).subscribe((data: CompraVenda) =>{
        if(data){
          this.hasError = false;
          this.mensagemErro = '';
          // let newCompraVenda : CalendarEvent = {
          //   id: data.id,
          //   title: data.titulo,
          //   start: parseISO(this.diaSelecionado+''),//startOfDay(new Date(this.viewDate)),
          //   end: parseISO(this.diaSelecionado+''),//endOfDay(new Date(this.viewDate)),
          //   color: data.tipo == "compra" ? this.colors.red : data.tipo == "venda" ? this.colors.blue : this.colors.yellow,
          //   actions: this.actions,
          //   draggable: true,
          //   resizable: {
          //     beforeStart: true,
          //     afterEnd: true,
          //   },
          // }
          let newCompraVenda : CalendarEvent = this.agendaService.convertCompraVendaToCalendarEvent(data);
          newCompraVenda.actions = this.actions;
          this.listaCompraVenda.push(newCompraVenda);
        }else{
          this.hasError = true;
          this.mensagemErro = 'Algo deu errado. Fale com o suporte.';
        }
        this.carregando = false;
      },error =>{
        this.carregando = false;
        this.hasError = true;
        this.mensagemErro = 'Algo deu errado. Fale com o suporte.';
      },() =>{
        this.refresh.next();
        this.carregando = false;
      })
      this.compraVendaForm = new CompraVenda();
      this.compraVendaForm.tipo = this.tiposEventos[0].tipo;
    }else{
      //identificar erro e exibir em tela
      this.hasError = true;
      this.mensagemErro = 'Verifique os campos obrigatórios';
      this.carregando = false;
    }

  }

  selectTipo(tipo){
    this.compraVendaForm.tipo = tipo.tipo;
  }

  closeOpenMonthViewDay(){
    this.activeDayIsOpen = false;
  }

  getRetornoDialog(event){
    if(this.tipoDialog == "delete" && event){
      this.deleteCompraVenda();
    }
  }

  deleteCompraVenda(){
    this.agendaService.deleteCompraVenda(Number(this.compraVendaSelecionado.id)).subscribe(data =>{
      if(data){
        this.listaCompraVenda = this.listaCompraVenda.filter((iEvent) => iEvent !== this.calendarEventSelecionado);
      }
    })
  }
}
