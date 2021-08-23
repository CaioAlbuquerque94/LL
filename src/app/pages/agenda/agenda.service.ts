import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CompraVenda } from 'src/app/shared/compraVenda';

import { UtilService } from './../../services/util/util.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

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

  constructor(
    private readonly http: HttpClient,
    public utilService: UtilService,
  ) { }

  convertCalendarEventToCompraVenda(event: CalendarEvent, descricao?: string, valor?: number): CompraVenda{
    let newCompraVenda: CompraVenda = {
      id: Number(event.id),
      titulo: event.title,
      dataEvento: new DatePipe('en-US').transform(event.start, 'dd/MM/yyyy'),//event.start.toISOString(),
      descricao: descricao ? descricao : event.meta ? event.meta.descricao : '',
      valor: valor ? valor : event.meta ? event.meta.valor : '',
      tipo: event.color.primary == this.colors.red.primary ? "compra" : event.color.primary == this.colors.blue.primary ? "venda" : "info",
    }
    return newCompraVenda;
  }

  convertCompraVendaToCalendarEvent(compraVenda: CompraVenda): CalendarEvent{
    let newEvent : CalendarEvent = {
      id: compraVenda.id,
      title: compraVenda.titulo,
      start: this.utilService.convertStringDateToDate(compraVenda.dataEvento),//startOfDay(new Date(this.viewDate)),
      end: this.utilService.convertStringDateToDate(compraVenda.dataEvento),//endOfDay(new Date(this.viewDate)),
      color: compraVenda.tipo == "compra" ? this.colors.red : compraVenda.tipo == "venda" ? this.colors.blue : this.colors.yellow,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      actions: [],
      meta: {descricao: compraVenda.descricao, valor: compraVenda.valor}
    }
    return newEvent;
  }

  getDayofAgenda(date: Date){
    //chama servico pra getDay no back
    return date ? new Date(date) : new Date();
  }

  getEventsOfMonth(date: Date){
    let params = new HttpParams();
    params = params.append("start", this.utilService.converterDateAngularParaStringDateJava(this.utilService.getFirstDayOfMonth(date)));
    params = params.append("end", this.utilService.converterDateAngularParaStringDateJava(this.utilService.getLastDayOfMonth(date)));
    return this.http.get(this.utilService.API+"/compraVenda/getAllByMonth",{params:params});
  }

  getEventsPaged(){
    let params = new HttpParams();
    params = params.append("first", "0");
    params = params.append("last", "10");
    params = params.append("sortBy", "dataEvento");
    return this.http.get(this.utilService.API+"/compraVenda/listPaged",{params:params});
  }

  criarEditarCompraVenda(compraVenda : CompraVenda){
    return this.http.post(this.utilService.API+"/compraVenda/createCompraVenda",JSON.parse(JSON.stringify(compraVenda)));
  }

  editCompraVenda(compraVenda : CompraVenda){
    return this.http.put(this.utilService.API+"/compraVenda/editCompraVenda",JSON.parse(JSON.stringify(compraVenda)));
  }

  deleteCompraVenda(id: Number){
    return this.http.delete(this.utilService.API+"/compraVenda/deleteCompraVenda/"+id);
  }

  getTotalCVDoMes(date: Date){
    let params = new HttpParams();
    params = params.append("start", this.utilService.converterDateAngularParaStringDateJava(this.utilService.getFirstDayOfMonth(date)));
    params = params.append("end", this.utilService.converterDateAngularParaStringDateJava(this.utilService.getLastDayOfMonth(date)));
    return this.http.get(this.utilService.API+"/compraVenda/getTotalCVDoMes",{params:params});
  }

}
