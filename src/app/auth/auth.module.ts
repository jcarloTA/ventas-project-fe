import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialFormsModule } from '../shared/material-forms/material-forms.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialFormsModule
  ]
})
export class AuthModule { }
