import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Producto } from 'src/app/shared/models/producto';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {

  productos: Producto[];
  constructor(
    public helpersService: HelpersService,
    public productosService: ProductosService,
    public carritoService: CarritoService
    ) {
    this.helpersService.title = Titles.productos;
  }


  ngOnInit() {
    this.getProductos();
  }
  

  getProductos(){
    this.productosService.getAll().subscribe( (res:Producto[]) => {
      this.productos = res;
    })
  }

  addToShoop(oroducto) {
    this.carritoService.addProducto(oroducto);
    console.log('addprod', this.carritoService.pedido);
  }
}
