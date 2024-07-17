import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './registerForm.component';
import {
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, RegisterFormComponent],
  providers: [provideHttpClient(withFetch(), withJsonpSupport())],
  exports: [RegisterFormComponent],
})
export class RegisterFormModuleModule {}
