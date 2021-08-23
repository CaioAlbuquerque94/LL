import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import _ from 'lodash';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { UtilService } from 'src/app/services/util/util.service';
import { TipoDialog } from 'src/app/shared/tipoDialog';

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

  diaSelecionado: string;
  carregando: boolean = true;
  exibirDetalheDiaSelecionado: boolean = false;

  tiposEventos: any[] = [{tipo: 'compra', descricao: 'Compra'}, {tipo: 'venda', descricao: 'Venda'}, {tipo: 'info', descricao: 'Informação'}]
  compraVendaForm: CompraVenda = new CompraVenda();
  compraVendaSelecionado: CompraVenda = null;
  calendarEventSelecionado: CalendarEvent = null;

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  refresh: Subject<any> = new Subject();//nao utilizado ainda
  showConfirm: boolean = false;
  tipoDialog: string = TipoDialog.DELETE;
  listaTotal: any = {compra: 0 , venda: 0};

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
    this.getEventsOfMonth(new Date());
    this.getTotalCVDoMes(new Date());

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

  getEventsOfMonth(date: Date){
    this.carregando = true;
    this.agendaService.getEventsOfMonth(date).subscribe((data:CompraVenda[])=>{
      let listEvents: CalendarEvent[] = [{
        start: new Date(),
        title: 'An event with no end date',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        actions: [],
      }]
      data.forEach((compraVenda:CompraVenda) => {
        let newEvent = this.agendaService.convertCompraVendaToCalendarEvent(compraVenda);
        newEvent.actions = this.actions;
        listEvents.push(newEvent);
      })
      this.carregando = false;
      this.listaCompraVenda = listEvents;
    });
  }

  getTotalCVDoMes(date: Date){
    this.agendaService.getTotalCVDoMes(date).subscribe((data:any[]) =>{
      if(data && data.length>0){
        for(let i=0;i<data.length;i++){
          if(data[i].startsWith('compra')){
              // console.log(data[i].split(',')[1]);
              this.listaTotal.compra = data[i].split(',')[1];
          }else if(data[i].startsWith('venda')){
            this.listaTotal.venda =  data[i].split(',')[1];
          }
        }
      }else{
        this.listaTotal = {compra: 0, venda: 0};
      }
    })
  }
  
  getDiaSelecionado(){
    this.compraVendaForm = _.cloneDeep(this.compraVendaSelecionado);
    this.diaSelecionado = this.utilService.convertDateToYYYYMMDD(this.utilService.convertStringDateToDate(this.compraVendaForm.dataEvento));
    
    // this.viewDate=parseISO(this.diaSelecionado+'');
    // this.activeDayIsOpen = false;
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
      case "Clicked":
        this.exibirDetalheDiaSelecionado = true;
        this.getDiaSelecionado();
        break;
      case "Edited":
        this.exibirDetalheDiaSelecionado = true;
        this.getDiaSelecionado();
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
        this.tipoDialog = TipoDialog.DELETE;
        this.showConfirm = true;
        break;
      
      default:
        this.exibirDetalheDiaSelecionado = true;
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
  }

  salvarEditarAnotacao(){
    this.hasError = false;
    this.mensagemErro = '';
    if(this.compraVendaForm.titulo && this.compraVendaForm.descricao && this.diaSelecionado){
      this.compraVendaForm.dataEvento = new DatePipe('en-US').transform(this.diaSelecionado, 'dd/MM/yyyy');
      this.carregando = true;

      this.agendaService.criarEditarCompraVenda(this.compraVendaForm).subscribe((data: CompraVenda) =>{
        if(data){
          this.hasError = false;
          this.mensagemErro = '';
          if(this.compraVendaForm.id && this.compraVendaForm.id > 0){
            this.listaCompraVenda = this.listaCompraVenda.filter((iEvent) => iEvent !== this.calendarEventSelecionado);
            this.exibirDetalheDiaSelecionado = false;
          }
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
        this.compraVendaForm = new CompraVenda();
        this.compraVendaForm.tipo = this.tiposEventos[0].tipo;
      })
    }else{
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
    this.getEventsOfMonth(this.viewDate);
    this.getTotalCVDoMes(this.viewDate);
  }

  getRetornoDialog(event){
    this.showConfirm = false;
    if(event){
      if(this.tipoDialog == TipoDialog.DELETE){
        this.deleteCompraVenda();
      }else if(this.tipoDialog == TipoDialog.CANCELA_ALTERACAO){
        this.cancelarAlteracao();
      }
    }
  }

  deleteCompraVenda(){
    this.agendaService.deleteCompraVenda(Number(this.compraVendaSelecionado.id)).subscribe(data =>{
      if(data){
        this.listaCompraVenda = this.listaCompraVenda.filter((iEvent) => iEvent !== this.calendarEventSelecionado);
      }
    })
  }

  cancelarAlteracao(){
    this.refresh.next();
    this.exibirDetalheDiaSelecionado = false;
    this.diaSelecionado = this.utilService.convertDateToYYYYMMDD(new Date());
    this.compraVendaForm = new CompraVenda();
    this.compraVendaForm.tipo = this.tiposEventos[0].tipo;
  }

  abrirCancelaAlteracao(){
    this.tipoDialog = TipoDialog.CANCELA_ALTERACAO;
    this.showConfirm = true;
  }

}
