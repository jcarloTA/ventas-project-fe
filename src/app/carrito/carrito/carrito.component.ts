import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  
  constructor(
    public helpersService: HelpersService,
    public carritoService: CarritoService ) 
  {
    this.helpersService.title = Titles.carrito;
  }

  ngOnInit() {
    this.carritoService.loadInitialPedido();
    console.log('carrito initial', this.carritoService.pedido);
  }

}
