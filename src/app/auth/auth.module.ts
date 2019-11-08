import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialFormsModule } from '../shared/material-forms/material-forms.module';
import { FormsModule } from '@angular/forms';
import { MaterialNavigationModule } from '../shared/material-navigation/material-navigation.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialFormsModule,
    FormsModule,
    MaterialNavigationModule
  ]
})
export class AuthModule { }
