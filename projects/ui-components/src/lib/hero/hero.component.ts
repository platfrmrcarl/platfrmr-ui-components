import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: '../tailwind.scss'
})
export class HeroComponent {
  
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() subHeader: string = "";
  @Input() CTALink: string = "";
  @Input() CTAText: string = "";
  @Input() CTA2Link: string = "";
  @Input() CTA2Text: string = "";

}
