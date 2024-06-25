import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() footer_description: string = '';
}
