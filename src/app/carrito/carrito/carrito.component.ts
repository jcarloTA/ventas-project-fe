import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.carrito;
  }

  ngOnInit() {
  }

}
