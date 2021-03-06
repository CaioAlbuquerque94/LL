import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { UtilService } from './../../services/util/util.service';

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
  isactive = false;
  isactive2 = false;
  focusItem: string = "#focus1";

  constructor(
    private formBuilder: FormBuilder,
    public utilService: UtilService,
    public util : UtilService
  ) { }

  ngAfterViewInit() {
    this.isactive = true;
  }

  ngOnInit(): void {
    this.util.getLacosPaged(0,2,'data_publicacao').subscribe(data =>{
      console.log(data);
    })
    // this.util.getFirst().subscribe(data=>{
    //   this.newestList = [];
    //   let obj = {
    //     img : data[0].url,
    //     texto : "abaCancelamento_NF006759",
    //     titulo : "abaCancelamento_NF006759",
    //     dataPublicacao : new Date()
    //   }
    //   this.newestList.push(obj);
    // })
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
    this.isactive = false;
    this.modalAddCard.show();
    this.focusItem = "#focus2"
    this.isactive2 = true;
  }

  addNewCard(){
    if(this.cardObjForm.valid){
      this.newestList.unshift(this.cardObjForm.getRawValue())
    }
  }

  myShowFunction(){
    console.log("show event");
  }
  myHideFunction1(){
    console.log("hide event");
    this.addCard();
  }
  myHideFunction2(){
    console.log("hide event2");
    this.isactive2 = false;
    if(this.focusItem == "#focus2"){
      setTimeout(() => {
        this.focusItem = "#focus3"
        this.isactive2 = true;
      }, 300);
    }
  }

  
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.utilService.upload(this.file).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        // Short link via api response
        this.shortLink = event.link;

        this.loading = false; // Flag variable 
      }
    });
  }

}
