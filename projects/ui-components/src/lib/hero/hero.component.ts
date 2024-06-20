import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() secondHeader: string = "";
  @Input() CTALink: string = "";
  @Input() CTAText: string = "";
  @Input() CTA2Link: string = "";
  @Input() CTA2Text: string = "";

  constructor() {}

  ngOnInit(): void {}
}
