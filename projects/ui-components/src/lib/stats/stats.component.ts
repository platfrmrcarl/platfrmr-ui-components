import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input()stats_1_title: string = '';
  @Input()stats_1_value: string = '';
  @Input()stats_2_title: string = '';
  @Input()stats_2_value: string = '';
  @Input()stats_3_title: string = '';
  @Input()stats_3_value: string = '';
  
}
