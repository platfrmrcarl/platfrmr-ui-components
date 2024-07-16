import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-pricingtable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricingtable.component.html',
})
export class PricingtableComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() subscription_plan_name_1: string = '';
  @Input() subscription_plan_name_2: string = '';
  @Input() subscription_plan_name_3: string = '';
  @Input() subscription_plan_price_1: string = '';
  @Input() subscription_plan_price_2: string = '';
  @Input() subscription_plan_price_3: string = '';
  @Input() subscription_plan_details_1: string = '';
  @Input() subscription_plan_details_2: string = '';
  @Input() subscription_plan_details_3: string = '';
}
