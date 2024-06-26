import { Component, Input } from '@angular/core';

@Component({
  selector: 'uic-pricingtable',
  standalone: true,
  imports: [],
  templateUrl: './pricingtable.component.html',
  styleUrl: './pricingtable.component.css'
})
export class PricingtableComponent {
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
