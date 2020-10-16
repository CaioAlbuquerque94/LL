import { UtilService } from './../../services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("modalAddCard") modalAddCard: ModalDirective;
  col_resposive : string = "col-xl-3 col-lg-4 col-md-6 col-12";
  cardObjForm: FormGroup;
  newestList : any = [];

  constructor(
    private formBuilder: FormBuilder,
    public util : UtilService
  ) { }

  ngOnInit(): void {
    // this.util.list().subscribe(data => {
    //   if(data){
    //     this.newestList = data;
    //     for (const items of this.newestList) {
    //       items.dataPublicacao = new Date();
    //     }
    //   }else{
    //     this.newestList = [];
    //   }
    // });

    let data = this.util.list();
    if(data){
      this.newestList = data;
      for (const items of this.newestList) {
        items.dataPublicacao = new Date();
      }
    }else{
      this.newestList = [];
    }

    this.cardObjForm = this.formBuilder.group({
      img : [null, Validators.required],
      texto : [null, Validators.required],
      titulo : [null, Validators.required],
      dataPublicacao : new Date()
    })
  }
  addCard(){
    this.modalAddCard.show();
  }

  addNewCard(){
    if(this.cardObjForm.valid){
      this.newestList.unshift(this.cardObjForm.getRawValue())
    }
  }

}
