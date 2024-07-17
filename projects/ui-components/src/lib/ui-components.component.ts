import { Component, importProvidersFrom } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
@Component({
  selector: 'lib-ui-components',
  standalone: true,
  imports: [],
  providers: [ ],
  template: ` <p>ui-components works!</p> `,
  styles: ``,
})
export class UiComponentsComponent {}
