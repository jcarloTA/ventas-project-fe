import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { CarritoModule } from './carrito/carrito.module';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { CrearAnuncioComponent } from './admin/crear-anuncio/crear-anuncio.component';
import { AnunciosComponent } from './admin/anuncios/anuncios.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { VendedoresComponent } from './admin/vendedores/vendedores.component';
import { CrearProductoComponent } from './admin/crear-producto/crear-producto.component';
import { CrearVendedorComponent } from './admin/crear-vendedor/crear-vendedor.component';
import { PerfilAdministradorComponent } from './admin/perfil-administrador/perfil-administrador.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { AnunciosListComponent } from './carrito/anuncios-list/anuncios-list.component';
import { PedidosComponent } from './carrito/pedidos/pedidos.component';
import { PerfilVendedorComponent } from './carrito/perfil-vendedor/perfil-vendedor.component';
import { ProductosListComponent } from './carrito/productos-list/productos-list.component';
import { HacerPedidoComponent } from './carrito/hacer-pedido/hacer-pedido.component';
import { AuthGuardService as AuthGuard} from './services/auth-guard/auth-guard.service';
import { AuthLoginService } from './services/auth-login/auth-login.service';

const routes : Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthLoginService]},
  { 
    path: 'admin', 
    component: AdminPanelComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'anuncios', component: AnunciosComponent},
      { path: 'productos', component: ProductosComponent},
      { path: 'vendedores', component: VendedoresComponent},
      { path: 'crear-anuncio', component: CrearAnuncioComponent},
      { path: 'editar-anuncio/:id', component: CrearAnuncioComponent},
      { path: 'crear-producto', component: CrearProductoComponent},
      { path: 'editar-producto/:id', component: CrearProductoComponent},
      { path: 'crear-vendedor', component: CrearVendedorComponent},
      { path: 'editar-vendedor/:id', component: CrearVendedorComponent},
      { path: 'perfil-administrador', component: PerfilAdministradorComponent},
    ]
  },
  {
    path: 'carrito',
    component: CarritoComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'noticias', pathMatch: 'full' },
      { path: 'noticias', component: AnunciosListComponent},
      { path: 'pedidos', component: PedidosComponent},
      { path: 'perfil', component: PerfilVendedorComponent},
      { path: 'productos', component: ProductosListComponent},
      { path: 'hacer-pedido', component: HacerPedidoComponent},
    ]
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    CarritoModule,
    AdminModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
