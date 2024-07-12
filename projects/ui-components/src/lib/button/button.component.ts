import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

    @Input() title: string = '';
}
