import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HotListComponent } from './hot-list/hot-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    HotListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
