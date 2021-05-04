import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  getDayofAgenda(date: Date){
    return date? new Date(date) : new Date();
  }
}
