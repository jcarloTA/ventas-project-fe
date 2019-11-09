import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/shared/models/vendedor';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { VendedoresService } from 'src/app/services/vendedores/vendedores.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent implements OnInit {

  vendedores: Vendedor[]
  
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion', 'estado', 'fechaNacimiento', 'actions'];
 
  constructor(
    public helpersService: HelpersService,
    public vendedoresService: VendedoresService) {
    this.helpersService.title = Titles.vendedores;
  }

  ngOnInit() {
    this.getVendedores();
  }

  getVendedores() {
    this.vendedoresService.getAll().subscribe((res: Vendedor[]) => {
      this.vendedoresService.vendedores = res;
      this.vendedores = this.vendedoresService.vendedores;
    })
  }

  eliminar(id) {
    this.vendedoresService.delete(id).subscribe((res: Vendedor[]) => {
      this.vendedoresService.vendedores = res;
      this.vendedores = this.vendedoresService.vendedores;
    })
  }
}
