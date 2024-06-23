import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbubbleComponent } from './chatbubble.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ChatbubbleComponent
  ],
  exports: [ChatbubbleComponent]
})
export class ChatbubbleModule { }
