import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  urlApi = 'http://localhost:5050'
  constructor(public httpClient: HttpClient) { 

  }

  getNoticias() {
    return this.httpClient.get(`${this.urlApi}/noticias/`)
  }
}
