import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './loginForm.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginFormComponent],
  providers: [provideHttpClient(withFetch(), withJsonpSupport())],
  exports: [LoginFormComponent],
})
export class LoginFormModuleModule {}
