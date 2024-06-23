import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CountdownComponent
  ],
  exports: [CountdownComponent]
})
export class CountdownModule { }
