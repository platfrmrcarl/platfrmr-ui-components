import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faMoneyBill, faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'uic-stats',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  faClock = faClock;
  faMoneyBill = faMoneyBill;
  faBolt = faBolt;
  
  @Input() tile_1_title: string = "";
  @Input() tile_1_value: string = "";
  @Input() tile_1_desc: string = "";
  @Input() tile_2_title: string = "";
  @Input() tile_2_value: string = "";
  @Input() tile_2_desc: string = "";
  @Input() tile_3_title: string = "";
  @Input() tile_3_value: string = "";
  @Input() tile_3_desc: string = "";
}
