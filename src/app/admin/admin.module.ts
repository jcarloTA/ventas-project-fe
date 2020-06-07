import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { CrearAnuncioComponent } from './crear-anuncio/crear-anuncio.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { MaterialFormsModule } from '../shared/material-forms/material-forms.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialNavigationModule } from '../shared/material-navigation/material-navigation.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { ProductosComponent } from './productos/productos.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { FormsModule } from '@angular/forms';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';
import { AppDonutChartComponent } from '../components/app-donut-chart/app-donut-chart.component';
import { AppAreaChartComponent } from '../components/app-area-chart/app-area-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    CrearVendedorComponent,
    CrearAnuncioComponent,
    CrearProductoComponent,
    DashboardComponent,
    AdminPanelComponent,
    AnunciosComponent,
    ProductosComponent,
    VendedoresComponent,
    PerfilAdministradorComponent,
    AppDonutChartComponent,
    AppAreaChartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialNavigationModule,
    MaterialFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class AdminModule { }
