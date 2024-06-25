import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-emptystate',
  standalone: true,
  imports: [],
  templateUrl: './emptystate.component.html',
  styleUrl: './emptystate.component.css'
})
export class EmptystateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
