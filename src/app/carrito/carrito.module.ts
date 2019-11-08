import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { AnunciosListComponent } from './anuncios-list/anuncios-list.component';
import { PerfilVendedorComponent } from './perfil-vendedor/perfil-vendedor.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule } from '@angular/router';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialFormsModule } from '../shared/material-forms/material-forms.module';
import { MaterialNavigationModule } from '../shared/material-navigation/material-navigation.module';



@NgModule({
  declarations: [
    CarritoComponent, 
    AnunciosListComponent, 
    PerfilVendedorComponent,
    PedidosComponent, 
    HacerPedidoComponent, 
    ProductosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialFormsModule,
    MaterialNavigationModule
  ]
})
export class CarritoModule { }
