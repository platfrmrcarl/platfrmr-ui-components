import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StatsComponent
  ],
  exports: [
    StatsComponent
  ]
})
export class StatsModule { }
