import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardImageTextModule } from 'src/app/shared/card-image-text/card-image-text.module';
import { HomeComponent } from './home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WalkthroughModule } from 'ngx-walkthrough';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardImageTextModule,
    WalkthroughModule,
    ModalModule.forRoot()
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
