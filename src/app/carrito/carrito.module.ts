import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { PructosListComponent } from './pructos-list/pructos-list.component';
import { AnunciosListComponent } from './anuncios-list/anuncios-list.component';
import { PerfilVendedorComponent } from './perfil-vendedor/perfil-vendedor.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule } from '@angular/router';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { ProductosListComponent } from './productos-list/productos-list.component';



@NgModule({
  declarations: [
    CarritoComponent, 
    PructosListComponent, 
    AnunciosListComponent, PerfilVendedorComponent,PedidosComponent, HacerPedidoComponent, ProductosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CarritoModule { }
