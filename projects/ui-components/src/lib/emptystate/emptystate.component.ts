import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-emptystate',
  standalone: true,
  imports: [],
  templateUrl: './emptystate.component.html',
})
export class EmptystateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
