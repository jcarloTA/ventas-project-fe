import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Producto } from 'src/app/shared/models/producto';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.scss']
})
export class HacerPedidoComponent implements OnInit {
  isLinear = false
 
  // displayedColumns: string[] = ['nombre', 'costo', 'cantidad','actions'];
  displayedColumns: string[] = ['nombre', 'costo', 'cantidad'];
  constructor(
    public helpersService: HelpersService,
    public carritoService: CarritoService,
    public router: Router
  ) {
    
    
  }

  ngOnInit() {
  }

  savePedido() {
    this.carritoService.createPedido(this.carritoService.pedido).subscribe( res => {
      console.log('pedido realizado', res);
      this.router.navigate(['carrito/pedidos']);
    })
  }
}
