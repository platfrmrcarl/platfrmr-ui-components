import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
