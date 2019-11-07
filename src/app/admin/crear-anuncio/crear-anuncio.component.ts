import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.component.html',
  styleUrls: ['./crear-anuncio.component.scss']
})
export class CrearAnuncioComponent implements OnInit {
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.crearAnuncio;
   }

  ngOnInit() {
  }

}
