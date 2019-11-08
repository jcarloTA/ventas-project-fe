import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';

@Component({
  selector: 'app-anuncios-list',
  templateUrl: './anuncios-list.component.html',
  styleUrls: ['./anuncios-list.component.scss']
})
export class AnunciosListComponent implements OnInit {

  
  constructor(public helpersService: HelpersService) {
    this.helpersService.title = Titles.anuncios;
   }
  ngOnInit() {
  }

}
