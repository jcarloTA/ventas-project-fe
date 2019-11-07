import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/shared/models/anuncio';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})
export class AnunciosComponent implements OnInit {
  anuncios: Anuncio[] = [
    {
      id: 1,
      nombre: 'Primer Anuncio',
      descripcion: 'Descrippcion',
    },
    {
      id: 1,
      nombre: 'Primer Anuncio',
      descripcion: 'Descrippcion',
    }
  ];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','actions'];
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.anuncios;
   }

  ngOnInit() {
  }

}
