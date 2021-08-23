import { TipoDialog } from './../tipoDialog';
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
  @Input('mostrar') set setMostrarValue(value) {
    if(value){
      this.modalConfirmDialog.show();
    }else{
      if(this.modalConfirmDialog){
        this.modalConfirmDialog.hide();
      }
    }
  }
  @Input('tipo') set setTipoValue(value) {
    if(value){
      this.tipo = value;
      switch (value) {
        case TipoDialog.DELETE:
          this.titulo = "Você tem certeza que deseja excluir este item?";
          this.opcoes = ["SIM", "NÃO"];
          break;

        case TipoDialog.CANCELA_ALTERACAO:
          this.titulo = "Você tem certeza que deseja cancelar as alterações?";
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
      case TipoDialog.DELETE:
        if(opcao == "SIM"){
          this.retornoMostrar.emit(true);
        }else{
          this.retornoMostrar.emit(false);
        }
        this.close();
        break;

      case TipoDialog.CANCELA_ALTERACAO:
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
