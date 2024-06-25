import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-indicator',
  standalone: true,
  imports: [],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.css'
})
export class IndicatorComponent {

    @Input() img_src: string = '';
}
