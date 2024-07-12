import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-indicator',
  standalone: true,
  imports: [],
  templateUrl: './indicator.component.html',
})
export class IndicatorComponent {

    @Input() img_src: string = '';
}
