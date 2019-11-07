import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Primer Producto',
      descripcion: 'Descrippcion',
      costo: 12,
    },
    {
      id: 1,
      nombre: 'Primer producto',
      descripcion: 'Descrippcion Descrippcionn Descrippcion',
      costo: 12
    }
  ];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'costo','actions'];
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.productos;
   }

  ngOnInit() {
  }

}
