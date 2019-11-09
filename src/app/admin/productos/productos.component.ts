import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[]
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'costo','actions'];
  constructor(
    public helpersService: HelpersService,
    public productosService: ProductosService
    ) {
    this.helpersService.title = Titles.productos;
   }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productosService.getAll().subscribe( (res:Producto[]) => {
      this.productosService.productos = res;
      this.productos = this.productosService.productos;
    })
  }

  eliminar(id) {
    this.productosService.delete(id).subscribe((res:Producto[]) => {
      this.productosService.productos = res;
      this.productos = this.productosService.productos;
    })
  }
}
