import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

    env = environment
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

}
