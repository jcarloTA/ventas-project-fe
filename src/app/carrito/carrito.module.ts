import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { PructosListComponent } from './pructos-list/pructos-list.component';
import { AnunciosListComponent } from './anuncios-list/anuncios-list.component';



@NgModule({
  declarations: [
    CarritoComponent, 
    PructosListComponent, 
    AnunciosListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarritoModule { }
