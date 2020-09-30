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
  cardObj : any = {
    id : 0,
    img : "https://media-cdn.tripadvisor.com/media/photo-s/15/22/5e/31/img-20180921-wa0043-largejpg.jpg",
    texto : "Texto de teste",
    titulo : "Titulo teste",
    dataPublicacao : new Date()
  }
  newestList : any = [];

  constructor(
    private formBuilder: FormBuilder,
    public util : UtilService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.cardObj.id = (Math.random() *100).toFixed(0);
      this.newestList.push(this.cardObj);
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
