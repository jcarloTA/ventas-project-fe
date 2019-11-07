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

const routes : Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { 
    path: 'admin', 
    component: AdminPanelComponent, 
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'anuncios', component: AnunciosComponent},
      { path: 'productos', component: ProductosComponent},
      { path: 'vendedores', component: VendedoresComponent},
      { path: 'crear-anuncio', component: CrearAnuncioComponent},
      { path: 'crear-producto', component: CrearProductoComponent},
      { path: 'crear-vendedor', component: CrearVendedorComponent},
      { path: 'perfil-administrador', component: PerfilAdministradorComponent},
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
