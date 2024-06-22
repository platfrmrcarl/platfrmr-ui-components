import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
    @Input() stat_1_title: string = '';
    @Input() stat_1_value: string = '';
    @Input() stat_2_title: string = '';
    @Input() stat_2_value: string = '';
    @Input() stat_3_title: string = '';
    @Input() stat_3_value: string = '';
}
