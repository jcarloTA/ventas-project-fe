import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Anuncio } from 'src/app/shared/models/anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

    env = environment
    private _anuncios: Anuncio[]
    constructor(
    private  httpClient: HttpClient
    ) { }

    getAll() {
      return this.httpClient.get(`${this.env.apiUrl}/noticias/`)
    }

    create(body) {
      return this.httpClient.post(`${this.env.apiUrl}/noticias/`, body)
    }
    
    update(body) {
      return this.httpClient.post(`${this.env.apiUrl}/noticias/`, body)
    }
    delete(id) {
      return this.httpClient.delete(`${this.env.apiUrl}/noticias/${id}`,)
    }

    get anuncios(): Anuncio[] {
      return this._anuncios
    }

    set anuncios(anuncios: Anuncio[]) {
      this._anuncios = anuncios;
    }

    getAnuncioById( id) {
      return this.anuncios.filter( e => e.id == id)[0]
    }
}
