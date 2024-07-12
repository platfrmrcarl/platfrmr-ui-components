import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
})
export class NewsletterComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() footer_description: string = '';
}
