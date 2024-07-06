import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  @Input() bgColor: string = '';
  @Input() stats_title_color: string = '';
  @Input() stats_desc_color: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stats_1_title: string = '';
  @Input() stats_1_value: string = '';
  @Input() stats_2_title: string = '';
  @Input() stats_2_value: string = '';
  @Input() stats_3_title: string = '';
  @Input() stats_3_value: string = '';
  @Input() stats_4_title: string = '';
  @Input() stats_4_value: string = '';
}
