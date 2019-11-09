import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/shared/models/anuncio';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { AnunciosService } from 'src/app/services/anuncios/anuncios.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})
export class AnunciosComponent implements OnInit {
  anuncios: Anuncio[];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','actions'];
  constructor(
    public helpersService: HelpersService,
    public anunciosService: AnunciosService
  ) {
    this.helpersService.title = Titles.anuncios;
   }

  ngOnInit() {
    this.getAnuncios();
  }

  getAnuncios() {
    this.anunciosService.getAll().subscribe( (res:Anuncio[]) => {
      this.anunciosService.anuncios = res;
      this.anuncios = this.anunciosService.anuncios;
    })
  }

  eliminar(id) {
    this.anunciosService.delete(id).subscribe((res:Anuncio[]) => {
      this.anunciosService.anuncios = res;
      this.anuncios = this.anunciosService.anuncios;
    })
  }
  

}
