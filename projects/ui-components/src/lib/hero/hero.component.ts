import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() bannerText: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() CTA1: string = '';
  @Input() CTA2: string = '';
  @Input() CTA1Link: string = '';
  @Input() CTA2Link: string = '';
}
