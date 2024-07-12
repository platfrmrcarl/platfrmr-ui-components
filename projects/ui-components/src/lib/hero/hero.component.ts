import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'uic-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
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
  @Input() imgSrc_w:number = 0;
  @Input() imgSrc_h:number = 0;

  ngOnInit(){
  }
}
