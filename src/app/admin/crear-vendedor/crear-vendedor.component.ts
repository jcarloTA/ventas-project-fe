import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Vendedor } from 'src/app/shared/models/vendedor';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.scss']
})
export class CrearVendedorComponent implements OnInit {

  model: Vendedor = {
    apellido: '',
    contrasena: '',
    direccion: '',
    estado: '',
    fechaNacimiento: '',
    nombre: '',
    telefonos: []
  }

  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.crearVendedor;
   }

  ngOnInit() {
  }

  agregarTelefono() {
    this.model.telefonos.push({numero: null})
  }

  crear(model) {
    console.log('crear', model)
  }
}
