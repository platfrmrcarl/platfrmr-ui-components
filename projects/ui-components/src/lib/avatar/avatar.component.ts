import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  
    constructor(){
    }
    
    @Input() img_src: string = '';
}
