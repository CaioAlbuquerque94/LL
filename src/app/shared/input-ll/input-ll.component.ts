import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-ll',
  templateUrl: './input-ll.component.html',
  styleUrls: ['./input-ll.component.css']
})
export class InputLlComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() showError: boolean = false;
  @Input() lista: any[] = [];
  @Input() valorInicial: any = '';
  @Input() minlength: number = null;
  @Input() maxlength: number = null;
  
  @Output() valor: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitValor(event){
    this.valor.emit(event);
  }

}
