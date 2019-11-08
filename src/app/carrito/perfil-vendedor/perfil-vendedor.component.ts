import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.scss']
})
export class PerfilVendedorComponent implements OnInit {

  model = {}
  
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.perfilVendedor;
  }

  ngOnInit() {
  }

}
