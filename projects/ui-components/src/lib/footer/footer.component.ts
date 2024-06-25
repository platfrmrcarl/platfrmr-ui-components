import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() twitter_url: string = '';
  @Input() youtube_url: string = '';
  @Input() facebook_url: string = '';
}
