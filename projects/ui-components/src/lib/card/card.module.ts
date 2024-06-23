import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CardComponent
  ],
  exports: [CardComponent]
})
export class CardModule { }
