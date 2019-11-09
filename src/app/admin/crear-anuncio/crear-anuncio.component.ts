import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers/helpers.service';
import { Titles } from 'src/app/shared/enums/titles.enum';
import { Anuncio } from 'src/app/shared/models/anuncio';
import { AnunciosService } from 'src/app/services/anuncios/anuncios.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear-anuncio',
  templateUrl: './crear-anuncio.component.html',
  styleUrls: ['./crear-anuncio.component.scss']
})
export class CrearAnuncioComponent implements OnInit {
  model: Anuncio = {
    descripcion: '',
    nombre: ''
  }
  constructor(
    public helpersService: HelpersService,
    public anunciosService: AnunciosService,
    public router: Router,
    public route: ActivatedRoute) {
    this.helpersService.title = Titles.crearAnuncio;
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.model = this.anunciosService.getAnuncioById(id);
    }
  }

  getFile(event) {
    let files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(files[0]);
  }

  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.model.imagen = "data:image/jpg;base64," + btoa(binaryString);  // Converting binary string data.
  }

  saveAnuncio() {
    this.anunciosService.create(this.model).subscribe((res) => {
      console.log('create',res);
      this.router.navigate(['admin/anuncios']);
    })
  }

}
