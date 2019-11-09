import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Anuncio } from 'src/app/shared/models/anuncio';
import { AnunciosService } from 'src/app/services/anuncios/anuncios.service';

@Component({
  selector: 'app-anuncios-list',
  templateUrl: './anuncios-list.component.html',
  styleUrls: ['./anuncios-list.component.scss']
})
export class AnunciosListComponent implements OnInit {

  anuncios: Anuncio[];
  constructor(
    public helpersService: HelpersService,
    public anuncioService: AnunciosService) {
    this.helpersService.title = Titles.anuncios;
   }
  ngOnInit() {
    this.getAnuncios();
  }

  getAnuncios() {
    this.anuncioService.getAll().subscribe( (res: Anuncio[]) => {
      console.log('anuncios', res)
      this.anuncios = res;
    })

  }
}
