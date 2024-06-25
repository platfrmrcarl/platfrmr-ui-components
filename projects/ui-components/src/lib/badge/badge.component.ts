import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {

    constructor(){
    }
    @Input() message: string = '';
    
}
