import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Producto } from 'src/app/shared/models/producto';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.scss']
})
export class HacerPedidoComponent implements OnInit {
  isLinear = false
 
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Primer Producto',
      descripcion: 'Descrippcion',
      costo: 12,
      cantidad: 2
    },
    {
      id: 1,
      nombre: 'Primer producto',
      descripcion: 'Descrippcion Descrippcionn Descrippcion',
      costo: 12,
      cantidad: 1
    }
  ];
  displayedColumns: string[] = ['nombre', 'costo', 'cantidad','actions'];
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.hacerPedido;
  }

  ngOnInit() {
  }

}
