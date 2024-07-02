import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ConnectComponent],
  exports: [ConnectComponent],
})
export class ConnectModule {
  @Input() title: string = '';
}
