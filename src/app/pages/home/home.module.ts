import { CardImageTextModule } from 'src/app/shared/card-image-text/card-image-text.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HotListComponent } from './hot-list/hot-list.component';
import { CardImageTextComponent } from 'src/app/shared/card-image-text/card-image-text.component';



@NgModule({
  declarations: [
    HomeComponent,
    HotListComponent,
  ],
  imports: [
    CommonModule,
    CardImageTextModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
