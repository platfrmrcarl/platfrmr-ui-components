import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() bgColor: string = '';
  @Input() bannerText: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() CTA1: string = '';
  @Input() CTA2: string = '';
  @Input() CTA1Link: string = '';
  @Input() CTA2Link: string = '';
  @Input() imgSrc: string = '';
}
