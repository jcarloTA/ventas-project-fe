import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/shared/models/vendedor';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  vendedores: Vendedor[] = [
    {
      id: 1,
      nombre: 'Primer Producto',
      apellido: 'jueares',
      direccion: 'direcciokn 1',
      estado: 'gt',
      fechaNacimiento: '123-12-12',
    }
  ];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion','estado', 'fechaNacimiento', 'actions'];
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.vendedores;
   }

  ngOnInit() {
  }

}
