import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [
    {
      id: 1,
      nombre: 'Primer Pedido',
      fechaEntrega: '10/10/2019',
      idVendedor: 1,
      montoTotal: 40,
    },
  ];
  displayedColumns: string[] = ['id', 'nombre', 'fechaEntrega', 'montoTotal'];
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.pedidos;
  }

  ngOnInit() {
  }

}
