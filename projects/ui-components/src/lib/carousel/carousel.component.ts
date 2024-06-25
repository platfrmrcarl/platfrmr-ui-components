import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() img_src_1: string = '';
  @Input() img_src_2: string = '';
  @Input() img_src_3: string = '';
  @Input() img_src_4: string = '';
}
