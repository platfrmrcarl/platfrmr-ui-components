import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
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
