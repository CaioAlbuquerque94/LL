import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild("modalConfirmDialog") public modalConfirmDialog: ModalDirective;
  @Output('retornoMostrar') retornoMostrar = new EventEmitter<boolean>();
  // @Output() valor: any = new EventEmitter();
  @Input('mostrar') set setMostrarValue(value) {
    if(value){
      this.modalConfirmDialog.show();
      // this.retornoMostrar.emit(true);
    }else{
      if(this.modalConfirmDialog){
        this.modalConfirmDialog.hide();
      }
      // this.retornoMostrar.emit(false);
    }
  }
  @Input('tipo') set setTipoValue(value) {
    if(value){
      this.tipo = value;
      switch (value) {
        case 'delete':
          this.titulo = "Você tem certeza que deseja excluir este item?";
          this.opcoes = ["SIM", "NÃO"];
          break;
      
        default:
          break;
      }
    }
  }

  titulo: string = "Você tem certeza que deseja excluir este item?";
  opcoes: any[] = ["SIM", "NÃO"];
  tipo: string = "delete";
  // mostrar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  close(){
    this.setMostrarValue = false;
  }
  
  clickConfirm(opcao){
    switch (this.tipo) {
      case 'delete':
        if(opcao == "SIM"){
          this.retornoMostrar.emit(true);
        }else{
          this.retornoMostrar.emit(false);
        }
        this.close();
        break;
    
      default:
        break;
    }
  }
  
}
