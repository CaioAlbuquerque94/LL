import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputLlComponent } from './input-ll.component';


@NgModule({
  declarations: [
    InputLlComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputLlComponent
  ]
})
export class InputLlModule { }
