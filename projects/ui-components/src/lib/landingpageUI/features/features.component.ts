import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  constructor() {}
  @Input() bgColor: string = '';
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() feature_1_title: string = '';
  @Input() feature_1_description: string = '';
  @Input() feature_2_title: string = '';
  @Input() feature_2_description: string = '';
  @Input() feature_3_title: string = '';
  @Input() feature_3_description: string = '';
  @Input() feature_4_title: string = '';
  @Input() feature_4_description: string = '';
}
